# grid-neighbors-1d

Get the 8 closest neighbors of a grid with edge wrapping from a 1d array

## Why?
![grid-neighbors](https://raw.githubusercontent.com/phugh/grid-neighbors-1d/master/grid-neighbors.png)

## Usage
Get the neighbors of cell 12 in a 5x5 grid:
```javascript
import { getNeighbors } from "grid-neighbors-1d";
const neighbors = getNeighbors(12, 5, 5);
console.log(neighbors); // [7, 8, 13, 18, 17, 16, 11, 6] - clockwise from north
```

`getNeighbors` returns an array of indexes of the cell immediately to the north of the chosen cell, then clockwise around the remaining cells:

* neighbors[0] = north neighbor
* neighbors[1] = north-east neighbor
* neighbors[2] = east neighbor
* neighbors[3] = south-east neighbor
* neighbors[4] = south neighbor
* neighbors[5] = south-west neighbor
* neighbors[6] = west neighbor
* neighbors[7] = north-west neighbor

This means you can use destructuring if your environment supports it:

```javascript
const [north, northEast, east, southEast, south, southWest, west, northWest] = getNeighbors(4, 10, 6);
```

For your convenience, TypeScript type declarations (index.d.ts), a declaration map (index.d.ts.map), and a sourcemap (index.js.map) are included.

A `Direction` object is also available for convenience:

```javascript
import { Direction } from "grid-neighbors-1d";
const neighbors = getNeighbors(12, 5, 5);
console.log(neighbors[Direction.NORTH]); // 7
```

## License
&copy; 2019-23 [P. Hughes](https://www.phugh.es). All rights reserved.

Shared under the [MIT](https://choosealicense.com/licenses/mit/) license.
