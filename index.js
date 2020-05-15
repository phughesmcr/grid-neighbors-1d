/**
 * grid-neighbors-1d
 * v1.0.0
 *
 * Get the 8 closest neighbors of a cell in a 2d grid when flattened to a 1d array
 *
 * Help me make this better:
 * https://github.com/phugh/grid-neighbors-1d
 *
 * (C) 2019-20 P. Hughes
 * Licence : Creative Commons Attribution-NonCommercial-ShareAlike 3.0 Unported
 * http://creativecommons.org/licenses/by-nc-sa/3.0/
 *
 * Usage example:
 * const gn = require("grid-neighbors-1d");
 * const neighbors = gn(12,5,6); // i.e. get the neighbors of cell 12 in a grid 5 high by 6 wide
 * console.log(neighbors); // [7, 8, 13, 18, 17, 16, 11, 6] - clockwise from north
 * // i.e. [north, north east, east, south east, south, south west, west, north west]
 *
 * See README.md for help.
 *
 * @param {number} cell current cell
 * @param {number} width grid width
 * @param {number} height grid height
 * @return {Array<number>} [north, north east, east, south east, south, south west, west, north west];
 */

// eslint-disable-next-line no-extra-semi
;(() => {
  'use strict';

  /**
   * @function getNeighbors
   * @param {number} cell current cell
   * @param {number} width grid width
   * @param {number} height grid height
   * @return {Array<number>} [north, north east, east, south east, south, south west, west, north west];
   */
  const getNeighbors = (cell, width, height) => {
    if (cell == null || width == null || height == null) {
      throw new Error('Invald input, expected cell, width and height.');
    } else if (isNaN(cell) || isNaN(width) || isNaN(height)) {
      throw new TypeError('Invald input, expected numbers only.');
    }

    const SIZE = width * height; // Total cells

    if (SIZE < 9) {
      throw new Error(`grid-neighbors: Minimum grid size is 9 cells. Provided grid is ${SIZE} cells.`);
    } else if (cell >= SIZE) {
      throw new Error(`grid-neighbors: Cell reference "${cell}" out of bounds. Maximum reference is ${SIZE - 1}.`);
    }
    // Setup
    const LC = Math.floor(cell / width) * width;  // left most cell
    const RC = (LC + width) - 1;                  // right most cell
    const SIZE_MINUS_WIDTH = SIZE - width;
    const CELL_MINUS_WIDTH = cell - width;
    const CELL_PLUS_WIDTH = cell + width;
    const CELL_MOD_WIDTH = cell % width;
    const TOP_RIGHT = width - 1;
    const BOTTOM_RIGHT = SIZE - 1;

    // Directions
    let north;
    let south;
    let east;
    let west;
    let northWest;
    let northEast;
    let southEast;
    let southWest;

    // North
    if (CELL_MINUS_WIDTH < 0) {                   // TOP EDGE
      north = SIZE_MINUS_WIDTH + cell;
    } else {
      north = CELL_MINUS_WIDTH;
    }

    // South
    if (CELL_PLUS_WIDTH >= SIZE) {                // BOTTOM EDGE
      south = cell - LC;
    } else {
      south = CELL_PLUS_WIDTH;
    }

    // East, North-East, South-East
    if (CELL_MOD_WIDTH === TOP_RIGHT) {           // RIGHT EDGE
      east = LC;
      if (cell === TOP_RIGHT) {                   // top right corner
        northEast = SIZE_MINUS_WIDTH;
        southEast = LC + width;
      } else if (cell === BOTTOM_RIGHT) {         // bottom right corner
        northEast = LC - width;
        southEast = 0;
      } else {
        northEast = LC - width;
        southEast = LC + width;
      }
    } else {
      east = cell + 1;
      northEast = north + 1;
      southEast = south + 1;
    }

    // West, North-West, South-West
    if (CELL_MOD_WIDTH === 0) {                   // LEFT EDGE
      west = RC;
      if (cell === SIZE_MINUS_WIDTH) {            // bottom left corner
        northWest = cell - 1;
        southWest = TOP_RIGHT;
      } else if (cell === 0) {                    // top left corner
        northWest = BOTTOM_RIGHT;
        southWest = RC + width;
      } else {
        northWest = cell - 1;
        southWest = RC + width;
      }
    } else {
      west = cell - 1;
      northWest = north - 1;
      southWest = south - 1;
    }

    return [north, northEast, east, southEast, south, southWest, west, northWest];
  };

  if (typeof exports !== 'undefined') {
    if (typeof module !== 'undefined' && module.exports) {
      exports = module.exports = getNeighbors;
    }
    exports.getNeighbors = getNeighbors;
    exports.getNeighbours = getNeighbors;
  }
})();
