function checkMagazine(magazine: string[], note: string[]): void {
  let magDict = {};
  let works = '';

  for (let i = 0; i < magazine.length; i++){
      let word = magazine[i];
      magDict[word] = magDict[word] ? magDict[word] + 1 : 1; 
  }

  for (let i = 0; i < note.length; i++){
      if (!(note[i] in magDict)) {
          works = 'No';
          break;
      } else {
          if (magDict[note[i]] < 1) {
              works = 'No'
              break;
          }
          magDict[note[i]] = magDict[note[i]] - 1;
      }
  }
  if (works === '') { works = 'Yes' }
  console.log(works);
}

console.log(checkMagazine(['give', 'me', 'one', 'grand', 'today', 'night'], ['give', 'one', 'grand', 'today', 'testing']));
