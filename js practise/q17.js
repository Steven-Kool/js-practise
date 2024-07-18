const canTraverseMaze = (maze, directions) => {
  let start, finish;
  let walls = [];

  for(let i = 0; i < maze.length; i++) {
    for(let j = 0; j < maze[i].length; j++) {
      switch(maze[i][j]) {
        case "S":
          start = [i, j];
          break;
        case "F":
          finish = [i, j];
          break;
        case "#":
          walls.push([i, j]);
          break;
      }
    }
  }

  let current = start;
  let hit = false;

  for(const dir of directions) {
    switch(dir) {
      case "W":
        current[1]--;
        break;
      case "E":
        current[1]++;
        break;
      case "N":
        current[0]--;
        break;
      case "S":
        current[0]++;
        break;
    }

    const [row, col] = current;

    if (row < 0 || col < 0 || row >= maze.length ||  col >= maze[row].length) hit = true;

    walls.forEach(wall => {
      if (JSON.stringify(wall) === JSON.stringify(current)) hit = true;
    });

    if (hit) break;
  }

  if(JSON.stringify(current) === JSON.stringify(finish) && !hit) {
    return true;
  }

  return false;
}

console.log(canTraverseMaze(["S...", ".#.#", ".#.#", "...F"], "EESSSWWNNNEESSSE"));
