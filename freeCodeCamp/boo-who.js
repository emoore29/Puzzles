// Returns true if the argument given is a boolean, and false otherwise.

function booWho(bool) {
  if ((bool === true) | (bool === false)) {
    return true;
  }
  return false;
}

console.log(booWho("test"));
