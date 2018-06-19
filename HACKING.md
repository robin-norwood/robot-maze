# How to hack on this project

I've attempted to make the code, HTML, and CSS for this project as easy to understand as possible, so that even a novice can take it apart and see how it works. Here's a quick explanation to get you started.

## Start with index.html

You will notice that the HTML doesn't contain any of the actual map content. The page is controlled by javascript, which generates the maps. Anything with an `id` will have javascript code that does a `document.getElementById(<the id>)`, and then manipulates it by changing its content, and/or attaching an event handler to it.

## Next, look at scripts/map.js

The javascript code starts with an object literal containing map definitions. Each map is a 2 dimensional array, with `0` for empty space and `1` for a wall, et. al. What each number means is defined by `mapTiles`.

Then there are a few functions. The javascript code starts when the `window.addEventListener("load"` function runs. That does two things - `setupSelector`, and then `updateMap`.

The `setupSelector` function only runs once. It populates the `mapSelect` selector with the names of the maps, and adds an event handler to the selector. So when a map is picked from the selector, `updateMap` runs with the name of that map.

The `updateMap` function is called when the page first loads, and whenever a map is picked from the selector. It does three things:
1. It sets the text of the `mapName` header.
2. It removes everything from the `mapBody` table to clear the previous map.
3. It adds rows to the `mapBody` table based on the data from the selected map.

## Explore styles/main.css

Interesting things about the CSS:
- Setting `border-sizing: border-box` and setting `outline`, `padding`, `border`, and `margin` all to 0 helps the `td` elements line up exactly at their defined size (64 pixels).
- The values of `mapTiles` from the javascript code match the CSS classes (`.start`, etc.). This is what draws each map tile.
- The `@media print` section, among other things, makes the stuff in `header` not show up when you print the page.

## Check out the images
- The images are SVGs: Scalable Vector Graphics. You can edit them with an SVG editor like Inkscape. They should be exactly square, and I tried to make them look good in grayscale, so they would look ok when printed in black and white.

## Use developer tools

Most web browsers have a set of 'developer tools'. You can use these to see what the code is doing while it runs.

## Read the docs

The Mozilla developer network is probably the best source of documentation for most of this code. If you google for `mdn <topic>` for any of the topics in this code, you'll probably get a good result. For example `mdn getElementById` will tell you all about that function.

## Hack away

You can download this code from github and open `index.html` in your web browser. Then when you change any of the files and reload, the changes should show up right away.

Try changing some things:
- Change something about one of the maps in the `mapData` object from `map.js`.
- Make your own map by adding a new item to `mapData`.
- Add a new tile type:
  - Copy one of the SVGs in `images` with a new name, edit it with Inkscape or another SVG editor, and save it in the `images` directory.
  - Add a class for that new file in `main.css`.
  - Add a new value to `mapTiles` in `map.js`.
  - Add that value to one of the maps.
- Do something crazy.

## Ask for help

If you got this far and still have questions, you can email me at robin.norwood@gmail.com

## Share

If you do something neat with this, I'd love to hear about it!
