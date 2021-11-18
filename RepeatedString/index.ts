function repeatedString(s, n) {
  let notA = s.replace(/a/g, ''); //b
  var onlyA = s.length - notA.length; //3-1=2
  var quotient = Math.floor(n / s.length); //3/3=1...1
  var reminder = n % s.length; //0
  var a2 = 0;
  for (var i = 0; i < reminder; i++) {
    if (s[i] !== 'a') continue;
    a2++;
  }
  var a1 = onlyA * quotient + a2;//2*1+0  
  return a1;
}