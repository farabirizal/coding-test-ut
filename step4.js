const upperMap = {
    A: 0, B: 1, C: 1, D: 1,
    E: 2,
    F: 3, G: 3, H: 3,
    I: 4,
    J: 5, K: 5, L: 5, M: 5, N: 5,
    O: 6,
    P: 7, Q: 7, R: 7, S: 7, T: 7,
    U: 8,
    V: 9, W: 9, X: 9, Y: 9, Z: 9
  };
  
  const digitToLetter = {
    0: 'A',
    1: 'B',
    2: 'E',
    3: 'F',
    4: 'I',
    5: 'J',
    6: 'O',
    7: 'P',
    8: 'U',
    9: 'V'
  };
  
  function step4_transform(inputString) {
    const hurufArray = inputString.split('');
    const angka = hurufArray.map(huruf => upperMap[huruf] ?? 0);
    const total = angka.reduce((sum, val) => sum + val, 0);
    const digits = total.toString().split('').map(Number);
    const tambahanHuruf = digits.map(d => digitToLetter[d] || '?');
    return [...hurufArray, ...tambahanHuruf].join(' ');
  }
  
  const input1 = "ABEFIABAB";   // Total = 12 → [1,2] → B E
  const input2 = "ABEFIJAB";    // Total = 11 → [1,1] → B B
  
  console.log("Sample Output 1:", step4_transform(input1)); // A B E F I A B A B B E
  console.log("Sample Output 2:", step4_transform(input2)); // A B E F I J A B B B
  