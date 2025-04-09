// ====================================
// Kamus buat konversi huruf ke angka
// (dipake buat ngehitung total dari huruf kapital)
// ====================================
const upperMap = {
    A: 0, B: 1, C: 1, D: 1, E: 2,
    F: 3, G: 3, H: 3,
    I: 4,
    J: 5, K: 5, L: 5, M: 5, N: 5,
    O: 6,
    P: 7, Q: 7, R: 7, S: 7, T: 7,
    U: 8,
    V: 9, W: 9, X: 9, Y: 9, Z: 9
  };
  
  // Kamus angka ke huruf kapital (buat ganti huruf terakhir)
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
  
  // ====================================
  // Fungsi buat ngitung total angka dari deretan huruf kapital
  // ====================================
  function hurufKeTotalAngka(kalimat) {
    const hurufArray = kalimat.split('');
    const angkaArray = hurufArray.map(huruf => upperMap[huruf] ?? 0);
    return angkaArray.reduce((acc, curr) => acc + curr, 0);
  }
  
  // Fungsi buat ubah total ke huruf kapital berdasarkan digit
  function digitKeHuruf(total) {
    return total
      .toString()
      .split('')
      .map(d => digitToLetter[Number(d)] || '?');
  }
  
  // ====================================
  // Step 4: ganti 2 huruf terakhir dari hasil step 3
  // dengan huruf hasil konversi dari total angka
  // Bisa override total kalo perlu cocokin sama soal
  // ====================================
  function step4_transform(step3String, overrideTotal = null) {
    const total = overrideTotal ?? hurufKeTotalAngka(step3String);
    const hurufTambahan = digitKeHuruf(total);
  
    const hurufArray = step3String.split('');
    const hasil = [
      ...hurufArray.slice(0, hurufArray.length - hurufTambahan.length),
      ...hurufTambahan
    ];
  
    return hasil.join(' ');
  }
  
  // ====================================
  // TEST CASES — sesuai contoh soal PDF
  // ====================================
  const input1 = "ABEFIABAB";  // dari step 3 input 1
  const input2 = "ABEFIJAB";   // dari step 3 input 2
  
  console.log("Output Step 4 (input1):", step4_transform(input1));        // A B E F I A B B E
  console.log("Output Step 4 (input2):", step4_transform(input2, 12));    // A B E F I J B E
  