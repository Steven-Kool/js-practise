const mergeIntervals = (intervals) => {
  for(let i = 0; i < intervals.length; i++) {

    for(let j = 0; j < intervals.length; j++) {
      const [start, end] = intervals[i];
      const [start2, end2] = intervals[j];

      if(i !== j) {
        if(start2 >= start && start2 <= end) {
          intervals[i][1] = Math.max(end, end2);

          intervals.splice(j, 1);
          j--;
        }
      }
    }
  }

  return intervals;
}

console.log(mergeIntervals([[1, 3], [2, 6], [8, 10], [15, 18], [18, 21]]));
