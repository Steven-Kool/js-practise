const findIslands = (map) => {
  let islandCount = 0;

  const connected = (i, j) => {
    if(i < 0 || i >= map.length || j < 0 || j >= map[i].length || map[i][j] !== 1) {
      return;
    }

    map[i][j] = 0;

    connected(i - 1, j);
    connected(i + 1, j);
    connected(i, j - 1);
    connected(i, j + 1);
  }

  for(let i = 0; i < map.length; i++) {
    for(let j = 0; j < map[i].length; j++) {
      if(map[i][j] === 1) {
        islandCount++;

        connected(i, j);
      }
    }
  }

  return islandCount;
}

console.log(findIslands([
  [1, 0, 0, 1],
[0, 0, 0, 0],
[0, 0, 0, 0],
[1, 0, 0, 1]
]));
