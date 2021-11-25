function matchingStrings(strings: string[], queries: string[]): number[] {
  // return queries.map(x=>strings.filter(y=>y===x).length)  Not readable solution
  
  let resultArray: number[] = [];

  if(strings.length === 0 || queries.length === 0) {
    return []
  }

  for(let i = 0; i < queries.length; i++) {
    let elemCounter = 0;
    let stringIndex = 0;

    while(stringIndex < strings.length) {
      if(strings[stringIndex] === queries[i]) {
        elemCounter++;
      }
      stringIndex++;
    }
    resultArray.push(elemCounter);
  }

  return resultArray;
}

console.log(matchingStrings(["aba", "baba", "aba", "xzxb"], ["aba", "xzxb", "ab"]));



