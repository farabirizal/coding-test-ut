// Kamus buat huruf gede (A-Z)
const upperMap = {
    A: 0, B: 1, C: 1, D: 1, E: 2, F: 2,
    H: 3, I: 4, J: 4, N: 5, O: 6, P: 6,
    T: 7, U: 8, V: 8, Z: 9
  };
  
  // Kamus buat huruf kecil (a-z)
  const lowerMap = {
    a: 9, b: 8, c: 8, d: 8, e: 7, f: 7,
    h: 6, i: 5, j: 5, n: 4, o: 3, p: 3,
    t: 2, u: 1, v: 1, z: 0
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
  const input = "Titanic";
  const result = convertToNumber(input);
  
  console.log("Input:", input);
  console.log("Output:", result);
  console.log("Program selesai"); // <- Tambahan akhir
  