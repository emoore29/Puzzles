// Splits a given array into "chunks" of a given size
// If the items don't split evenly, the last chunk

function chunkArrayInGroups(arr, size) {
  let chunkArr = [];
  let chunk;
  for (let i = 0; i < arr.length; i += size) {
    chunk = arr.slice(i, i + size);
    chunkArr.push(chunk);
  }
  return chunkArr;
}

console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 2));
