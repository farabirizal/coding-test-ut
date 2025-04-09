// Kamus buat huruf gede (A-Z)
const upperMap = {
    A: 0, B: 1, C: 1, D: 1, E: 2, F: 3, G: 3,
    H: 3, I: 4, J: 5, K: 5, L: 5, M: 5, N: 5, O: 6, P: 7,
    Q: 7, R: 7, S: 7, T: 7, U: 8, V: 9, W: 9, X: 9, Y: 9, Z: 9
  };
  
  // Kamus buat huruf kecil (a-z)
  const lowerMap = {
    a: 9, b: 8, c: 8, d: 8, e: 7, f: 6, g: 6,
    h: 6, i: 5, j: 4, k: 4, l: 4, m: 4, n: 4, o: 3, p: 2,
    q: 2, r: 2, s: 2, t: 2, u: 1, v: 0, w: 0, x: 0, y: 0, z: 0
  };
  
  // Fungsi buat baca satu huruf, terus cari angka
  function mapCharToNumber(char) {
    console.log("Lagi baca huruf:", char); // <- Debug bantu cek
  
    if (char === ' ') return 0;
    if (char in upperMap) return upperMap[char];
    if (char in lowerMap) return lowerMap[char];
    return 0;
  }
  
  // Fungsi utama step 1 - ngubah kalimat ke deretan angka
  function convertToNumber(sentence) {
    return sentence.split('').map(mapCharToNumber);
  }
  
  // input buat ngetes
const input1 = "Titanic";
const input2 = "Avenger Endgame";

const result1 = convertToNumber(input1);
const result2 = convertToNumber(input2);

console.log("Input 1:", input1);
console.log("Output 1:", result1);
console.log("Input 2:", input2);
console.log("Output 2:", result2);
  