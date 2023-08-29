/**
 * grid-neighbors-1d
 * v2.0.0
 *
 * Get the 8 closest neighbors of a cell in a 2d grid when flattened to a 1d array
 *
 * Help me make this better:
 * https://github.com/phugh/grid-neighbors-1d
 *
 * @module grid-neighbors-1d
 * @exports getNeighbors
 * @export getNeighbours
 * @copyright 2019-23 P. Hughes. All rights reserved.
 * @license MIT
 */

/**
 * @function getNeighbors
 * @description Get the 8 closest neighbors of a cell in a 2d grid when flattened to a 1d array
 * @param cell the cell to get neighbors for
 * @param width grid width
 * @param height grid height
 * @return an array of cell references [north, north-east, east, south-east, south, south-west, west, north-west]
 * @throws {SyntaxError} if function arguments are undefined or not numbers
 * @throws {RangeError} if total grid size is less than 9 cells or cell reference is out of bounds
 * @example
 *  import { getNeighbors } from 'grid-neighbors-1d';
 *  const neighbors = getNeighbors(12,5,6); // i.e. get the neighbors of cell 12 in a grid 5 high by 6 wide
 *  console.log(neighbors); // [7, 8, 13, 18, 17, 16, 11, 6] - clockwise from north
 *  // i.e. [north, north-east, east, south-east, south, south-west, west, north-west]
 */
export const getNeighbors = (
  cell: number,
  width: number,
  height: number,
): [
  north: number,
  northEast: number,
  east: number,
  southEast: number,
  south: number,
  southWest: number,
  west: number,
  northWest: number,
] => {
  // Validate input
  if (cell == null || isNaN(cell)) {
    throw new SyntaxError("Expected cell to be a number.");
  }
  if (width == null || isNaN(width)) {
    throw new SyntaxError("Expected width to be a number.");
  }
  if (height == null || isNaN(height)) {
    throw new SyntaxError("Expected height to be a number.");
  }

  /** The total number of cells in the grid */
  const SIZE = width * height;

  if (SIZE < 9) {
    throw new RangeError(`Minimum grid size is 9 cells. Provided grid (${width} X ${height}) is ${SIZE} cells.`);
  } else if (cell >= SIZE) {
    throw new RangeError(`Cell reference "${cell}" out of bounds. Maximum is ${SIZE - 1}.`);
  }

  // Setup
  const LEFT_MOST_CELL = Math.floor(cell / width) * width; // left most cell
  const RIGHT_MOST_CELL = LEFT_MOST_CELL + width - 1; // right most cell
  const SIZE_MINUS_WIDTH = SIZE - width;
  const CELL_MINUS_WIDTH = cell - width;
  const CELL_PLUS_WIDTH = cell + width;
  const CELL_MOD_WIDTH = cell % width;
  const TOP_RIGHT = width - 1;
  const BOTTOM_RIGHT = SIZE - 1;

  const north = CELL_MINUS_WIDTH < 0 ? SIZE_MINUS_WIDTH + cell : CELL_MINUS_WIDTH;
  const south = CELL_PLUS_WIDTH >= SIZE ? cell - LEFT_MOST_CELL : CELL_PLUS_WIDTH;

  let northEast: number;
  let east: number;
  let southEast: number;
  let southWest: number;
  let west: number;
  let northWest: number;

  // East, North-East, South-East
  if (CELL_MOD_WIDTH === TOP_RIGHT) {
    // RIGHT EDGE
    east = LEFT_MOST_CELL;
    if (cell === TOP_RIGHT) {
      // top right corner
      northEast = SIZE_MINUS_WIDTH;
      southEast = LEFT_MOST_CELL + width;
    } else if (cell === BOTTOM_RIGHT) {
      // bottom right corner
      northEast = LEFT_MOST_CELL - width;
      southEast = 0;
    } else {
      northEast = LEFT_MOST_CELL - width;
      southEast = LEFT_MOST_CELL + width;
    }
  } else {
    east = cell + 1;
    northEast = north + 1;
    southEast = south + 1;
  }

  // West, North-West, South-West
  if (CELL_MOD_WIDTH === 0) {
    // LEFT EDGE
    west = RIGHT_MOST_CELL;
    if (cell === SIZE_MINUS_WIDTH) {
      // bottom left corner
      northWest = cell - 1;
      southWest = TOP_RIGHT;
    } else if (cell === 0) {
      // top left corner
      northWest = BOTTOM_RIGHT;
      southWest = RIGHT_MOST_CELL + width;
    } else {
      northWest = cell - 1;
      southWest = RIGHT_MOST_CELL + width;
    }
  } else {
    west = cell - 1;
    northWest = north - 1;
    southWest = south - 1;
  }

  return [north, northEast, east, southEast, south, southWest, west, northWest];
};

export const getNeighbours = getNeighbors;
