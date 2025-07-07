// Import necessary modules
const express = require("express");
const cors = require("cors");

/**
 * Generates the coordinate points for a star shape.
 * 
 * @param {number} centerX - X coordinate of the star's center.
 * @param {number} centerY - Y coordinate of the star's center.
 * @param {number} outerRadius - Radius of the outer points of the star.
 * @param {number} innerRadius - Radius of the inner points of the star.
 * @param {number} numPoints - Number of star points (e.g., 5 for a classic star).
 * @returns {string} A string of points for an SVG polygon element.
 */
function generateStarPoints( centerX, centerY, outerRadius, innerRadius, numPoints ) {
    const resultArr = [];
    const step = Math.PI / numPoints;

    for (let foo = 0; foo < (2 * numPoints); foo++) {
        const currentRadius = foo % 2 === 0 ? outerRadius : innerRadius;
        const currentAngle = foo * step - Math.PI / 2;
        const xPos = centerX + currentRadius * Math.cos(currentAngle);
        const yPos = centerY + currentRadius * Math.sin(currentAngle);
        
        resultArr.push(`${xPos},${yPos}`);
    }

    return resultArr.join(" ");
}

/**
 * Converts a string to boolean.
 * 
 * @param {string} booleanString - String to convert ("true"/"false").
 * @returns {boolean} Boolean value corresponding to the input string.
 */
function stringToBoolean( booleanString ) {
    return booleanString.toLowerCase() === "true";
}

const app = express();

// Middleware for parsing form-encoded and JSON request bodies
app.use(express.urlencoded({ extended: false }));
app.use(cors())
app.use(express.json());

/**
 * GET / - Main SVG star rating generator endpoint.
 * Accepts query parameters for customization and returns SVG markup.
 */
app.get("/", (req, res) => {
    try {
        // Extract and parse query parameters with defaults
        const borderRadius = Number(req.query.radius ?? 32);
        const strokeWidth = Number(req.query.stroke ?? 2);
        const starSize = Number(req.query.star ?? 40);
        const starGap = Number(req.query.gap ?? 4);
        const paddingx = Number(req.query.px ?? 24);
        const paddingy = Number(req.query.py ?? 12);
        const width = Number(req.query.width ?? ((starSize * 5) + (starGap * 4) + (paddingx * 2)));
        const height = Number(req.query.height ?? (starSize + (paddingy * 2)));
        const showRating = stringToBoolean(req.query.showrating ?? "true");
        const showSeparator = stringToBoolean(req.query.showsep ?? "true");
        const rating = Number(req.query.rating ?? 4.5).toFixed(1);
        const fontSize = Number(req.query.fontsize ?? 24);
        const fontFamily = req.query.fontfamily ?? "Arial";
        const fontWeight = req.query.fontweight ?? "bold";
        const theme = req.query.theme ?? "light";
        const themeColor = req.query.color ?? "yellow";

        /**
         * Color themes for different UI modes (light/dark) and palette variants.
         */
        const colorPalette = {
            light: {
                yellow: { fillColor: "#fdfae5", borderColor: "#f3e260", starFillColor: "#f5dd29", starBorderColor: "#faf3c0" },
                orange: { fillColor: "#fdf5ec", borderColor: "#fdc788", starFillColor: "#ffb968", starBorderColor: "#fce8d2" },
                blue: { fillColor: "#e4f0f6", borderColor: "#5ba4cf", starFillColor: "#298fca", starBorderColor: "#bcd9ea" },
                purple: { fillColor: "#f3e5f5", borderColor: "#ba68c8", starFillColor: "#ab47bc", starBorderColor: "#e1bee7" },
                green: { fillColor: "#eef6ec", borderColor: "#99d18f", starFillColor: "#7bc86c", starBorderColor: "#d6ecd2" },
                red: { fillColor: "#fbedeb", borderColor: "#ec9488", starFillColor: "#ef7564", starBorderColor: "#f5d3ce" },
                magenta: { fillColor: "#fcf3f8", borderColor: "#ec71b1", starFillColor: "#e35199", starBorderColor: "#fbe8f3" },
                default: { fillColor: "#f2f2f2", borderColor: "#999999", starFillColor: "#808080", starBorderColor: "#d9d9d9" }
            },
            dark: {
                yellow: { fillColor: "#91741e", borderColor: "#d9af2d", starFillColor: "#f1c232", starBorderColor: "#a98823" },
                orange: { fillColor: "#8a5722", borderColor: "#cf8332", starFillColor: "#e69138", starBorderColor: "#a16627" },
                blue: { fillColor: "#255077", borderColor: "#3778b2", starFillColor: "#3d85c6", starBorderColor: "#2b5d8b" },
                purple: { fillColor: "#3e2f64", borderColor: "#5d4696", starFillColor: "#674ea7", starBorderColor: "#483775" },
                green: { fillColor: "#40652f", borderColor: "#5f9747", starFillColor: "#6aa84f", starBorderColor: "#4a7637" },
                red: { fillColor: "#5a2d2b", borderColor: "#a84e4a", starFillColor: "#d46a6a", starBorderColor: "#753838" },
                magenta: { fillColor: "#642e49", borderColor: "#95456d", starFillColor: "#a64d79", starBorderColor: "#743655" },
                default: { fillColor: "#0d0d0d", borderColor: "#595959", starFillColor: "#737373", starBorderColor: "#262626" }
            }
        }

        // Generate coordinates for 5 stars
        const starPoints = [
            generateStarPoints(((width / 2) - ((starSize * 2) + (starGap * 2))), (height / 2), starSize / 2, (starSize / 2) * 0.5, 5),
            generateStarPoints(((width / 2) - (starSize + starGap)), (height / 2), starSize / 2, (starSize / 2) * 0.5, 5),
            generateStarPoints((width / 2), (height / 2), starSize / 2, (starSize / 2) * 0.5, 5),
            generateStarPoints(((width / 2) + ((starSize * 2) + (starGap * 2))), (height / 2), starSize / 2, (starSize / 2) * 0.5, 5),
            generateStarPoints(((width / 2) + (starSize + starGap)), (height / 2), starSize / 2, (starSize / 2) * 0.5, 5)
        ];

        // Compute positions and paddings
        const ratingTextPaddingX = showRating ? strokeWidth + (fontSize / 2) : 0;
        const ratingTextPaddingY = showRating ? (height / 2) + (fontSize / 2) : 0;
        const starsPositionX = (showRating ? (ratingTextPaddingX + fontSize + starGap) : 0) + strokeWidth;
        const starsPositionY = strokeWidth;

        // SVG rating text element
        const ratingText = `
            <text
                id="rating-text"
                x="${ratingTextPaddingX + paddingx}" 
                y="${ratingTextPaddingY - strokeWidth}" 
                text-anchor="middle" 
                fill="${colorPalette[theme][themeColor].borderColor}" 
                font-size="${fontSize}" 
                font-family="${fontFamily}" 
                font-weight="${fontWeight}"
            >
                ${rating}
            </text>
        `;

        // Optional vertical separator (pipe)
        const pipe = `
            <rect
                id="separator"
                x="${starsPositionX + (ratingTextPaddingX * 2) - strokeWidth}"
                y="${(strokeWidth + height / 2) - ((height - (paddingy * 2)) / 2)}"
                width="${strokeWidth / 2}"
                height="${height - (paddingy * 2)}"
                fill="${colorPalette[theme][themeColor].borderColor}"
            />
        `;

        // Send SVG response
        res.setHeader("Content-Type", "image/svg+xml");
        res.send(`
            <svg 
                width="${width + starsPositionX + (showSeparator ? ratingTextPaddingX : 0)}" 
                height="${height + starsPositionY}" 
                xmlns="http://www.w3.org/2000/svg"
            >
                <rect
                    id="main-container"
                    x="${strokeWidth}" 
                    y="${strokeWidth}" 
                    width="${width - (strokeWidth * 2) + starsPositionX + (showSeparator ? ratingTextPaddingX : 0)}"  
                    height="${height - strokeWidth}" 
                    rx="${borderRadius}" 
                    ry="${borderRadius}" 
                    fill="${colorPalette[theme][themeColor].fillColor}" 
                    stroke="${colorPalette[theme][themeColor].borderColor}" 
                    stroke-width="${strokeWidth}"
                />
                ${showRating ? ratingText : ""}
                ${showSeparator ? pipe : ""}
                <g 
                    id="stars-behind"
                    transform="translate(${(showSeparator ? strokeWidth + ratingTextPaddingX : 0) + starsPositionX}, ${starsPositionY})"
                >
                    <polygon 
                        points="${starPoints[0]}" 
                        fill="${colorPalette[theme][themeColor].starBorderColor}" 
                        stroke="${colorPalette[theme][themeColor].starBorderColor}" 
                        stroke-width="${strokeWidth / 2}"
                    />
                    <polygon 
                        points="${starPoints[1]}" 
                        fill="${colorPalette[theme][themeColor].starBorderColor}" 
                        stroke="${colorPalette[theme][themeColor].starBorderColor}" 
                        stroke-width="${strokeWidth / 2}"
                    />
                    <polygon 
                        points="${starPoints[2]}" 
                        fill="${colorPalette[theme][themeColor].starBorderColor}" 
                        stroke="${colorPalette[theme][themeColor].starBorderColor}" 
                        stroke-width="${strokeWidth / 2}"
                    />
                    <polygon 
                        points="${starPoints[3]}" 
                        fill="${colorPalette[theme][themeColor].starBorderColor}" 
                        stroke="${colorPalette[theme][themeColor].starBorderColor}" 
                        stroke-width="${strokeWidth / 2}"
                    />
                    <polygon 
                        points="${starPoints[4]}" 
                        fill="${colorPalette[theme][themeColor].starBorderColor}" 
                        stroke="${colorPalette[theme][themeColor].starBorderColor}" 
                        stroke-width="${strokeWidth / 2}"
                    />
                </g>
                <g 
                    id="stars-front"
                    transform="translate(${(showSeparator ? strokeWidth + ratingTextPaddingX : 0) + starsPositionX}, ${starsPositionY})"
                >
                    <svg 
                        width="${paddingx + (rating * (((starSize * 5) + (starGap * 4)) / 5))}"
                    >
                        <polygon 
                            points="${starPoints[0]}" 
                            fill="${colorPalette[theme][themeColor].starFillColor}" 
                            stroke="none" 
                            stroke-width="${strokeWidth / 2}"
                        />
                        <polygon 
                            points="${starPoints[1]}" 
                            fill="${colorPalette[theme][themeColor].starFillColor}" 
                            stroke="none" 
                            stroke-width="${strokeWidth / 2}"
                        />
                        <polygon 
                            points="${starPoints[2]}" 
                            fill="${colorPalette[theme][themeColor].starFillColor}" 
                            stroke="none" 
                            stroke-width="${strokeWidth / 2}"
                        />
                        <polygon 
                            points="${starPoints[3]}" 
                            fill="${colorPalette[theme][themeColor].starFillColor}" 
                            stroke="none" 
                            stroke-width="${strokeWidth / 2}"
                        />
                        <polygon 
                            points="${starPoints[4]}" 
                            fill="${colorPalette[theme][themeColor].starFillColor}" 
                            stroke="none" 
                            stroke-width="${strokeWidth / 2}"
                        />
                    </svg>
                </g>
            </svg>
        `);
    }
    catch (error) {
        console.error(error);

        res.status(500).json({
            message: "Internal server error"
        });
    }
});

module.exports = app;
module.exports.generateStarPoints = generateStarPoints;
module.exports.stringToBoolean = stringToBoolean;
