<h1 align="center">Readme Star Rating</h1>

<h2 id="overview">Overview</h2>

Add star ratings to your GitHub repos to make them more attractive. You can customize the theme, colour, padding, gap, stroke, text, font, and more. Make your repo more trusted with github-star-rating.

<h2 id="base-url">Base URL</h2>

Use this URL in your `README.md` file
```
https://readme-star-rating.vercel.app/
```

**Example:**
<table>
    <thead>
        <tr>
            <td align="center"><strong>Star Rating</strong></td>
            <td align="center"><strong>Markdown</strong></td>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td><img src="https://readme-star-rating.vercel.app/" href="Star Rating"/></td>
            <td><code>![Star Rating](https://readme-star-rating.vercel.app/?theme=light&color=yellow)</code></td>
        </tr>
    </tbody>
</table>

<h2 id="customization">Customization</h2>

You can customize the appearance of **Star Rating** card however you wish with the URL parameters.

#### Common Options

<table>
    <thead>
        <tr>
            <td align="center"><strong>Name</strong></td>
            <td align="center"><strong>Description</strong></td>
            <td align="center"><strong>Type</strong></td>
            <td align="center"><strong>Default Value</strong></td>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td><code>radius</code></td>
            <td>Card border radius</td>
            <td>number</td>
            <td><code>32</code></td>
        </tr>
        <tr>
            <td><code>stroke</code></td>
            <td>Card stroke width</td>
            <td>number</td>
            <td><code>2</code></td>
        </tr>
        <tr>
            <td><code>star</code></td>
            <td>Star size</td>
            <td>number</td>
            <td><code>40</code></td>
        </tr>
        <tr>
            <td><code>gap</code></td>
            <td>Gap between elements</td>
            <td>number</td>
            <td><code>4</code></td>
        </tr>
        <tr>
            <td><code>px</code></td>
            <td>Padding of the x-axis</td>
            <td>number</td>
            <td><code>24</code></td>
        </tr>
        <tr>
            <td><code>py</code></td>
            <td>Padding of the y-axis</td>
            <td>number</td>
            <td><code>12</code></td>
        </tr>
        <tr>
            <td><code>width</code></td>
            <td>Card width</td>
            <td>number</td>
            <td>auto adjust</td>
        </tr>
        <tr>
            <td><code>height</code></td>
            <td>Card height</td>
            <td>number</td>
            <td>auto adjust</td>
        </tr>
        <tr>
            <td><code>showrating</code></td>
            <td>Show rating text to the left of the stars</td>
            <td>boolean</td>
            <td><code>true</code></td>
        </tr>
        <tr>
            <td><code>showsep</code></td>
            <td>Show separator between rating text and stars</td>
            <td>boolean</td>
            <td><code>true</code></td>
        </tr>
        <tr>
            <td><code>rating</code></td>
            <td>Rating value between 0 and 5</td>
            <td>number</td>
            <td><code>4.5</code></td>
        </tr>
        <tr>
            <td><code>fontsize</code></td>
            <td>Font size of rating text</td>
            <td>number</td>
            <td><code>24</code></td>
        </tr>
        <tr>
            <td><code>fontfamily</code></td>
            <td>Font family of rating text, chose from <a href="#fonts">available fonts</a></td>
            <td>enum</td>
            <td><code>Arial</code></td>
        </tr>
        <tr>
            <td><code>fontweight</code></td>
            <td>
                Font weight of rating text (<code>normal</code>, <code>bold</code>, <code>bolder</code>, <code>lighter</code>)
            </td>
            <td>enum</td>
            <td><code>bold</code></td>
        </tr>
        <tr>
            <td><code>theme</code></td>
            <td>Card theme (<code>light</code>, <code>dark</code>)</td>
            <td>enum</td>
            <td><code>light</code></td>
        </tr>
        <tr>
            <td><code>color</code></td>
            <td>Card theme colour, choose from 
                <a href="#theme-colors">available theme colors</a>
            </td>
            <td>enum</td>
            <td><code>yellow</code></td>
        </tr>
    </tbody>
</table>

<h2 id="fonts">Fonts</h2>

Use the following fonts as argument for `fontfamily` parameter.

- `Arial`
- `Helvetica`
- `Verdana`
- `Tahoma`
- `Trebuchet MS`
- `Geneva`
- `Times New Roman`
- `Times`
- `Georgia`
- `Courier New`
- `Courier`
- `Lucida Console`
- `Monaco`
- `sans-serif`
- `serif`
- `monospace`
- `cursive`
- `fantasy`
- `system-ui`

<h2 id="theme-colors">Theme Colors</h2>

Use the following colors as argument for `color` parameter.

#### Light Theme

<table>
    <thead>
        <tr>
            <td align="center"><strong>Color</strong></td>
            <td align="center"><strong>Star Rating</strong></td>
            <td align="center"><strong>Markdown</strong></td>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td><code>yellow</code></td>
            <td><img src="https://readme-star-rating.vercel.app/?theme=light&color=yellow" href="Star Rating"/></td>
            <td><code>![light-yellow](https://readme-star-rating.vercel.app/?theme=light&color=yellow)</code></td>
        </tr>
        <tr>
            <td><code>orange</code></td>
            <td><img src="https://readme-star-rating.vercel.app/?theme=light&color=orange" href="Star Rating"/></td>
            <td><code>![light-orange](https://readme-star-rating.vercel.app/?theme=light&color=orange)</code></td>
        </tr>
        <tr>
            <td><code>blue</code></td>
            <td><img src="https://readme-star-rating.vercel.app/?theme=light&color=blue" href="Star Rating"/></td>
            <td><code>![light-blue](https://readme-star-rating.vercel.app/?theme=light&color=blue)</code></td>
        </tr>
        <tr>
            <td><code>purple</code></td>
            <td><img src="https://readme-star-rating.vercel.app/?theme=light&color=purple" href="Star Rating"/></td>
            <td><code>![light-purple](https://readme-star-rating.vercel.app/?theme=light&color=purple)</code></td>
        </tr>
        <tr>
            <td><code>green</code></td>
            <td><img src="https://readme-star-rating.vercel.app/?theme=light&color=green" href="Star Rating"/></td>
            <td><code>![light-green](https://readme-star-rating.vercel.app/?theme=light&color=green)</code></td>
        </tr>
        <tr>
            <td><code>red</code></td>
            <td><img src="https://readme-star-rating.vercel.app/?theme=light&color=red" href="Star Rating"/></td>
            <td><code>![light-red](https://readme-star-rating.vercel.app/?theme=light&color=red)</code></td>
        </tr>
        <tr>
            <td><code>magenta</code></td>
            <td><img src="https://readme-star-rating.vercel.app/?theme=light&color=magenta" href="Star Rating"/></td>
            <td><code>![light-magenta](https://readme-star-rating.vercel.app/?theme=light&color=magenta)</code></td>
        </tr>
        <tr>
            <td><code>default</code></td>
            <td><img src="https://readme-star-rating.vercel.app/?theme=light&color=default" href="Star Rating"/></td>
            <td><code>![light-default](https://readme-star-rating.vercel.app/?theme=light&color=default)</code></td>
        </tr>
    </tbody>
</table>

#### Dark Theme

<table>
    <thead>
        <tr>
            <td align="center"><strong>Color</strong></td>
            <td align="center"><strong>Star Rating</strong></td>
            <td align="center"><strong>Markdown</strong></td>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td><code>yellow</code></td>
            <td><img src="https://readme-star-rating.vercel.app/?theme=dark&color=yellow" href="Star Rating"/></td>
            <td><code>![dark-yellow](https://readme-star-rating.vercel.app/?theme=dark&color=yellow)</code></td>
        </tr>
        <tr>
            <td><code>orange</code></td>
            <td><img src="https://readme-star-rating.vercel.app/?theme=dark&color=orange" href="Star Rating"/></td>
            <td><code>![dark-orange](https://readme-star-rating.vercel.app/?theme=dark&color=orange)</code></td>
        </tr>
        <tr>
            <td><code>blue</code></td>
            <td><img src="https://readme-star-rating.vercel.app/?theme=dark&color=blue" href="Star Rating"/></td>
            <td><code>![dark-blue](https://readme-star-rating.vercel.app/?theme=dark&color=blue)</code></td>
        </tr>
        <tr>
            <td><code>purple</code></td>
            <td><img src="https://readme-star-rating.vercel.app/?theme=dark&color=purple" href="Star Rating"/></td>
            <td><code>![dark-purple](https://readme-star-rating.vercel.app/?theme=dark&color=purple)</code></td>
        </tr>
        <tr>
            <td><code>green</code></td>
            <td><img src="https://readme-star-rating.vercel.app/?theme=dark&color=green" href="Star Rating"/></td>
            <td><code>![dark-green](https://readme-star-rating.vercel.app/?theme=dark&color=green)</code></td>
        </tr>
        <tr>
            <td><code>red</code></td>
            <td><img src="https://readme-star-rating.vercel.app/?theme=dark&color=red" href="Star Rating"/></td>
            <td><code>![dark-red](https://readme-star-rating.vercel.app/?theme=dark&color=red)</code></td>
        </tr>
        <tr>
            <td><code>magenta</code></td>
            <td><img src="https://readme-star-rating.vercel.app/?theme=dark&color=magenta" href="Star Rating"/></td>
            <td><code>![dark-magenta](https://readme-star-rating.vercel.app/?theme=dark&color=magenta)</code></td>
        </tr>
        <tr>
            <td><code>default</code></td>
            <td><img src="https://readme-star-rating.vercel.app/?theme=dark&color=default" href="Star Rating"/></td>
            <td><code>![dark-default](https://readme-star-rating.vercel.app/?theme=dark&color=default)</code></td>
        </tr>
    </tbody>
</table>

## Contribution

Contributions are welcome and appreciated! If you'd like to improve the project, whether it's fixing bugs, improving tests, or adding new features, feel free to open an issue or submit a pull request. Before contributing, please make sure your changes are well-tested and align with the project's coding style. If you're unsure where to start, take a look at the existing issues or reach out with suggestions — every bit of help counts!