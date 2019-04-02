# grid-neighbors-1d

Get the 8 closest neighbours of a grid with edge wrapping from a 1d array

## Why?
![grid-neighbors](https://raw.githubusercontent.com/phugh/grid-neighbors-1d/master/grid-neighbors.png)

## Usage
Get the neighbours of cell 12 in a 5x6 grid:
```Javascript
const gn = require('grid-neighbors-1d');
const neighbors = gn(12, 5, 6);
console.log(neighbours); // [6, 7, 8, 11, 13, 16, 17, 18]
```

grid-neighbors returns an array of indexes where:
* neighbors[0] = north west neighbor
* neighbors[1] = north neighbor
* neighbors[2] = north east neighbor
* neighbors[3] = west neighbor
* neighbors[4] = east neighbor
* neighbors[5] = south west neighbor
* neighbors[6] = south neighbor
* neighbors[7] = south east neighbor

## License
(C) 2019 [P. Hughes](https://www.phugh.es). All rights reserved.

Shared under the [Creative Commons Attribution-NonCommercial-ShareAlike 3.0 Unported](http://creativecommons.org/licenses/by-nc-sa/3.0/) license.