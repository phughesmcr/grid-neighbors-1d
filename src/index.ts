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
 * @exports getNeighbours
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

  const CELL = Math.floor(cell);
  const WIDTH = Math.floor(width);
  const HEIGHT = Math.floor(height);

  const SIZE = WIDTH * HEIGHT;
  if (SIZE < 9) {
    throw new RangeError(`Minimum grid size is 9 cells. Provided grid (${WIDTH} X ${HEIGHT}) is ${SIZE} cells.`);
  } else if (CELL >= SIZE) {
    throw new RangeError(`Cell reference "${CELL}" out of bounds. Maximum is ${SIZE - 1}.`);
  }

  const ROW = Math.floor(CELL / WIDTH);
  const COLUMN = CELL % WIDTH;

  const LEFT_MOST_CELL = ROW * WIDTH;
  const RIGHT_MOST_CELL = LEFT_MOST_CELL + WIDTH - 1;

  const SIZE_MINUS_WIDTH = SIZE - WIDTH;
  const CELL_MINUS_WIDTH = CELL - WIDTH;
  const CELL_PLUS_WIDTH = CELL + WIDTH;

  const TOP_RIGHT_CELL_IDX = WIDTH - 1;
  const BOTTOM_RIGHT_CELL_IDX = SIZE - 1;

  const north = CELL_MINUS_WIDTH < 0 ? SIZE_MINUS_WIDTH + CELL : CELL_MINUS_WIDTH;
  const south = CELL_PLUS_WIDTH >= SIZE ? CELL - LEFT_MOST_CELL : CELL_PLUS_WIDTH;

  let northEast: number;
  let east: number;
  let southEast: number;
  let southWest: number;
  let west: number;
  let northWest: number;

  // East, North-East, South-East
  if (COLUMN === TOP_RIGHT_CELL_IDX) {
    // RIGHT EDGE
    east = LEFT_MOST_CELL;
    if (CELL === TOP_RIGHT_CELL_IDX) {
      // top right corner
      northEast = SIZE_MINUS_WIDTH;
      southEast = LEFT_MOST_CELL + WIDTH;
    } else if (CELL === BOTTOM_RIGHT_CELL_IDX) {
      // bottom right corner
      northEast = LEFT_MOST_CELL - WIDTH;
      southEast = 0;
    } else {
      northEast = LEFT_MOST_CELL - WIDTH;
      southEast = LEFT_MOST_CELL + WIDTH;
    }
  } else {
    east = CELL + 1;
    northEast = north + 1;
    southEast = south + 1;
  }

  // West, North-West, South-West
  if (COLUMN === 0) {
    // LEFT EDGE
    west = RIGHT_MOST_CELL;
    if (CELL === SIZE_MINUS_WIDTH) {
      // bottom left corner
      northWest = CELL - 1;
      southWest = TOP_RIGHT_CELL_IDX;
    } else if (CELL === 0) {
      // top left corner
      northWest = BOTTOM_RIGHT_CELL_IDX;
      southWest = RIGHT_MOST_CELL + WIDTH;
    } else {
      northWest = CELL - 1;
      southWest = RIGHT_MOST_CELL + WIDTH;
    }
  } else {
    west = CELL - 1;
    northWest = north - 1;
    southWest = south - 1;
  }

  return [north, northEast, east, southEast, south, southWest, west, northWest];
};

export const getNeighbours = getNeighbors;
