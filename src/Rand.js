const rand = {
  i: (start = 10, end) => {
    if (typeof end == 'undefined') {
      end = start;
      start = 0;
    }
    return Math.round((Math.random() * (end - start)) + start);
  },
  f: (start = 10, end) => {
    if (typeof end == 'undefined') {
      end = start;
      start = 0;
    }
    return (Math.random() * (end - start)) + start;
  }
};

export default rand;