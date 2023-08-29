import { getNeighbors } from "../dist/index.js";

const arrayHasSameValues = (actual, expected) => actual.filter((v, i) => expected[i] === v).length === expected.length;

const aRes = [7, 8, 13, 18, 17, 16, 11, 6];
const aTest = getNeighbors(12, 5, 5);
if (!arrayHasSameValues(aTest, aRes)) throw new Error("Test 1 failed");

const bRes = [9, 5, 10, 15, 19, 18, 13, 8];
const bTest = getNeighbors(14, 5, 5);
if (!arrayHasSameValues(bTest, bRes)) throw new Error("Test 2 failed");

const cRes = [24, 20, 0, 5, 9, 8, 3, 23];
const cTest = getNeighbors(4, 5, 5);
if (!arrayHasSameValues(cTest, cRes)) throw new Error("Test 3 failed");

try {
  const x = getNeighbors();
  if (x) throw new Error("Test 4 failed");
} catch (err) {
  if (!(err instanceof SyntaxError)) throw err;
}

console.log("All tests passed");
