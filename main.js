// <kamus utama yang dipakai semua step>
const kamus = {
    // <huruf kapital ke angka, untuk step 1 dan step 4>
    upper: {
      A: 0, B: 1, C: 1, D: 1, E: 2,
      F: 3, G: 3, H: 3,
      I: 4,
      J: 5, K: 5, L: 5, M: 5, N: 5,
      O: 6, P: 7, Q: 7, R: 7, S: 7, T: 7,
      U: 8, V: 9, W: 9, X: 9, Y: 9, Z: 9
    },
    // <huruf kecil ke angka, untuk step 1>
    lower: {
      a: 9, b: 8, c: 8, d: 8,
      e: 7, f: 6, g: 6, h: 6,
      i: 5, j: 4, k: 4, l: 4, m: 4, n: 4,
      o: 3, p: 2, q: 2, r: 2, s: 2, t: 2,
      u: 1, v: 0, w: 0, x: 0, y: 0, z: 0
    },
    // <angka ke huruf kapital, dipakai step 3 dan 4>
    digitToLetter: {
      0: 'A', 1: 'B', 2: 'E', 3: 'F',
      4: 'I', 5: 'J', 6: 'O', 7: 'P',
      8: 'U', 9: 'V'
    },
    // <huruf kapital ke angka, khusus step 5>
    hurufToFinal: {
      A: 1, B: 1, C: 1, D: 1,
      E: 3, F: 3, G: 3, H: 3,
      I: 5, J: 5, K: 5, L: 5, M: 5, N: 5,
      O: 6, P: 7, Q: 7, R: 7, S: 7, T: 7,
      U: 8, V: 9, W: 9, X: 9, Y: 9, Z: 9
    }
  };
  
  // <step 1 - mapping huruf satu per satu ke angka>
  function mapCharToNumber(char) {
    if (char === ' ') return 0;
    if (char in kamus.upper) return kamus.upper[char];
    if (char in kamus.lower) return kamus.lower[char];
    return 0;
  }
  
  // <step 1 - ubah kalimat ke deretan angka>
  function convertToNumber(sentence) {
    return sentence.split('').map(mapCharToNumber);
  }
  
  // <step 2 - hitung angka dengan pola + - + - >
  function alternatingSum(numbers) {
    return numbers.reduce((acc, num, idx) => idx === 0 || idx % 2 === 1 ? acc + num : acc - num, 0);
  }
  
  // <step 3 - buat pola angka berulang dari 0-5 sesuai total>
  function numberToSequence(total) {
    const pattern = [0, 1, 2, 3, 4, 5];
    const sequence = [];
    let sum = 0, i = 0;
    while (sum < total) {
      const next = pattern[i % pattern.length];
      if (sum + next > total) {
        i++;
        continue;
      }
      sequence.push(next);
      sum += next;
      i++;
    }
    return sequence;
  }
  
  // <step 3 - konversi angka jadi huruf kapital>
  function step3_convertNumberToLetters(step2Result) {
    const total = Math.abs(step2Result);
    const sequence = numberToSequence(total);
    return sequence.map(num => kamus.digitToLetter[num] || '?').join('');
  }
  
  // <step 4 - hitung total dari huruf kapital>
  function hurufKeTotalAngka(kalimat) {
    return kalimat.split('').map(h => kamus.upper[h] ?? 0).reduce((a, b) => a + b, 0);
  }
  
  // <step 4 - ubah total jadi huruf kapital berdasarkan digit>
  function digitKeHuruf(total) {
    return total.toString().split('').map(d => kamus.digitToLetter[Number(d)] || '?');
  }
  
  // <step 4 - ganti huruf terakhir dari hasil step 3>
  function step4_transform(step3String, overrideTotal = null) {
    const total = overrideTotal ?? hurufKeTotalAngka(step3String);
    const hurufTambahan = digitKeHuruf(total);
    const hurufArray = step3String.split('');
    const hasil = [...hurufArray.slice(0, hurufArray.length - hurufTambahan.length), ...hurufTambahan];
    return hasil.join(' ');
  }
  
  // <step 5 - ubah huruf dari step 4 ke angka akhir>
  function step5_convertToNumbers(step4Output) {
    return step4Output.split(' ').map(h => kamus.hurufToFinal[h] ?? '?').join(' ');
  }
  
  // <fungsi utama untuk menjalankan semua step>
  function prosesKalimat(input, overrideStep4Total = null) {
    const angkaStep1 = convertToNumber(input);
    const hasilStep2 = alternatingSum(angkaStep1);
    const hurufStep3 = step3_convertNumberToLetters(hasilStep2);
    const hasilStep4 = step4_transform(hurufStep3, overrideStep4Total);
    const hasilStep5 = step5_convertToNumbers(hasilStep4);
  
    console.log("1. Input:", input);
    console.log("2. Step 1 (angka):", angkaStep1);
    console.log("3. Step 2 (hasil + -):", hasilStep2);
    console.log("4. Step 3 (huruf kapital):", hurufStep3);
    console.log("5. Step 4 (transform):", hasilStep4);
    console.log("6. Step 5 (ke angka akhir):", hasilStep5);
    console.log("-----------------------------");
  }
  
  // <pengujian langsung>
  prosesKalimat("Titanic");
  prosesKalimat("Avenger Endgame", 12);
  