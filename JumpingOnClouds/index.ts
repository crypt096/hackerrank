function jumpingOnClouds(c) {
  let p = 0;

  let i = 0;
  while (i < c.length) {
    console.log("index: " + i);
    if (c[i] === 0) {
      if (c[i + 2] === 0) {
        i = i + 2;
      } 
      else i++;
      p++;
    }
  }

  return p-1;
}