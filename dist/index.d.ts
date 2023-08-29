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
export declare const getNeighbors: (cell: number, width: number, height: number) => [north: number, northEast: number, east: number, southEast: number, south: number, southWest: number, west: number, northWest: number];
export declare const getNeighbours: (cell: number, width: number, height: number) => [north: number, northEast: number, east: number, southEast: number, south: number, southWest: number, west: number, northWest: number];
//# sourceMappingURL=index.d.ts.map