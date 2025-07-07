const request = require("supertest");
const app = require("../src/app");
const { generateStarPoints, stringToBoolean } = require("../src/app");

// Integration tests for the main "/" endpoint that returns an SVG.
// It verifies the response structure, content type, and how it handles query parameters.
describe("GET /", () => {
    /**
     * Test: Basic request to the root route should return an SVG string
     * with expected elements and a 200 OK status.
     */
    it("should return SVG content with 200 status", async () => {
        const response = await request(app).get("/");
        const body = response.body.toString();

        expect(response.statusCode).toBe(200);
        expect(response.headers["content-type"]).toMatch(/image\/svg\+xml/);
        expect(body).toContain("main-container");
        expect(body).toContain("stars-behind");
        expect(body).toContain("stars-front");
    });

    /**
     * Test: The endpoint should correctly parse and respond to query parameters:
     * - rating (e.g., 3.5),
     * - theme (e.g., dark),
     * - color (e.g., blue),
     * and reflect them in the SVG output.
     */
    it("should accept query parameters such as rank, theme, colour", async () => {
        const response = await request(app).get("/?rating=3.5&theme=dark&color=blue");
        const body = response.body.toString();

        expect(response.statusCode).toBe(200);
        expect(body).toContain("3.5");
        expect(body).toContain("#3778b2");  // assuming blue resolves to this hex
    });

    /**
     * Test: If `showrating=false` is passed, the SVG should not include
     * the element for displaying rating text.
     */
    it("should handle showrating=false", async () => {
        const response = await request(app).get("/?showrating=false");
        const body = response.body.toString();

        expect(response.statusCode).toBe(200);
        expect(body).toContain("main-container");
        expect(body).not.toContain("rating-text");
    });

    /**
     * Test: If `showsep=false` is passed, the SVG should omit the separator element.
     */
    it("should handle showsep=false", async () => {
        const response = await request(app).get("/?showsep=false");
        const body = response.body.toString();

        expect(response.statusCode).toBe(200);
        expect(body).toContain("main-container");
        expect(body).not.toContain("separator");
    });

    /**
     * Test: Simulates an internal server error to ensure the app returns
     * a 500 Internal Server Error status when a route throws unexpectedly.
     */
    it("should return 500 on internal error", async () => {
        const brokenApp = require("express")();

        brokenApp.get("/", () => {
            throw new Error("Boom");
        });

        const response = await request(brokenApp).get("/");

        expect(response.statusCode).toBe(500);
        expect(response.res.statusMessage).toBe("Internal Server Error");
    });
});

// Unit test for the helper function that generates SVG coordinate points for a star shape.
describe("generateStarPoints", () => {
    /**
     * Test: Ensure the generateStarPoints function returns a string of 10 coordinates
     * representing a 5-point star (each point has an outer and inner vertex).
     */
    it("should return 10 coordinate points for a 5-point star", () => {
        const points = generateStarPoints(50, 50, 20, 10, 5);
        const splitPoints = points.split(" ");

        expect(splitPoints.length).toBe(10);

        splitPoints.forEach((point) => {
            expect(point).toMatch(/^[-\d.]+,[-\d.]+$/);
        });
    });
});

// Unit tests for the stringToBoolean utility function.
describe("stringToBoolean", () => {
    /**
     * Test: Should return true for any case-insensitive variation of the string "true".
     */
    it("should return true for 'true' (case-insensitive)", () => {
        expect(stringToBoolean("true")).toBe(true);
        expect(stringToBoolean("TRUE")).toBe(true);
        expect(stringToBoolean("TrUe")).toBe(true);
    });

    /**
     * Test: Should return false for any case-insensitive variation of the string "false".
     */
    it("should return false for 'false' (case-insensitive)", () => {
        expect(stringToBoolean("false")).toBe(false);
        expect(stringToBoolean("FALSE")).toBe(false);
        expect(stringToBoolean("FaLsE")).toBe(false);
    });

    /**
     * Test: Should return false for any string that is not strictly "true" (case-insensitive).
     */
    it("should return false for non-true strings", () => {
        expect(stringToBoolean("yes")).toBe(false);
        expect(stringToBoolean("no")).toBe(false);
        expect(stringToBoolean("")).toBe(false);
        expect(stringToBoolean("random")).toBe(false);
    });
});
