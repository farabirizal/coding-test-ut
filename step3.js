// Kamus angka ke huruf kapital sesuai aturan soal
const digitToLetter = {
    0: 'A',
    1: 'B',
    2: 'E',
    3: 'F',
    4: 'I',
    5: 'J'
  };
  
  // Fungsi untuk membentuk deretan angka yang jika dijumlahkan hasilnya sama dengan total
  // Dimulai dari 0, 1, 2, dst., dan jika sudah lebih dari 5 akan diulang dari 0
  function numberToSequence(total) {
    const sequence = [];
    let sum = 0;
    let i = 0;
  
    while (sum < total) {
      sequence.push(i);
      sum += i;
  
      i++;
      if (i > 5) i = 0;
    }
  
    return sequence;
  }
  
  // Fungsi utama untuk mengubah angka (dari step 2) menjadi deretan huruf kapital
  function step3_convertNumberToLetters(step2Result) {
    const positive = Math.abs(step2Result); // ubah negatif jadi positif
    const numbers = numberToSequence(positive); // pecah menjadi deretan angka kecil
    const letters = numbers.map(num => digitToLetter[num] || '?'); // konversi ke huruf
    return letters.join('');
  }
  
  // Contoh input dari step 2
  const input1 = 12;     // contoh hasil dari Titanic
  const input2 = -16;    // contoh hasil dari Avenger Endgame
  
  // Cetak hasil konversi
  console.log("Input 1:", input1, "→", step3_convertNumberToLetters(input1));   // A_
  