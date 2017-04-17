A minimalistic HTML5 Canvas Context wrapper allowing to chain canvas drawing instructions. 

## Install & Usage

```
npm install gtx
```


```js
var Gtx = require("gtx");

// create a new graphic context from a canvas element
var g1 = Gtx(document.getElementById("canvas-1"));

// optional (convenient method to have the canvas fit the parent)
g1.fitParent();

// draw a rectangle with standard canvas API (just that now you can chain them)
g1.setFillStyle("#FF0000").fillRect(0, 0, w, h);

g1.moveTo(0, 0).lineTo(w, h).stroke();

```

