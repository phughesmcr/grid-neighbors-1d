# grid-neighbors-1d

Get the 8 closest neighbors of a grid with edge wrapping from a 1d array

## Why?
![grid-neighbors](https://raw.githubusercontent.com/phugh/grid-neighbors-1d/master/grid-neighbors.png)

## Usage
Get the neighbors of cell 12 in a 5x6 grid:
```Javascript
const gn = require('grid-neighbors-1d');
const neighbors = gn(12, 5, 6);
console.log(neighbors); // [7, 8, 13, 18, 17, 16, 11, 6] - clockwise from north
```

grid-neighbors returns an 0-based array of indexes of the cell immediately to the north of the chosen cell, then clockwise around the remaining cells:

* neighbors[0] = north neighbor
* neighbors[1] = north east neighbor
* neighbors[2] = east neighbor
* neighbors[3] = south east neighbor
* neighbors[4] = south neighbor
* neighbors[5] = south west neighbor
* neighbors[6] = west neighbor
* neighbors[7] = north west neighbor

## License
&copy; 2019-20 [P. Hughes](https://www.phugh.es). All rights reserved.

Shared under the [Creative Commons Attribution-NonCommercial-ShareAlike 3.0 Unported](http://creativecommons.org/licenses/by-nc-sa/3.0/) license.