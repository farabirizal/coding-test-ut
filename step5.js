// ==============================================
// Kamus huruf ke angka khusus Step 5
// (berbeda dari step sebelumnya, sesuai contoh soal PDF)
// ==============================================
const step5Map = {
    A: 1,
    B: 1,
    C: 1,
    D: 1,
    E: 3,
    F: 3,
    G: 3,
    H: 3,
    I: 5,
    J: 5,
    K: 5,
    L: 5,
    M: 5,
    N: 5,
    O: 6,
    P: 7,
    Q: 7,
    R: 7,
    S: 7,
    T: 7,
    U: 8,
    V: 9,
    W: 9,
    X: 9,
    Y: 9,
    Z: 9
  };
  
  // ==============================================
  // Fungsi Step 5: ubah huruf kapital hasil Step 4
  // jadi angka berdasarkan kamus baru di atas
  // ==============================================
  function step5_convertToNumbers(step4Output) {
    const hurufArray = step4Output.split(' ');
    const angkaArray = hurufArray.map(h => step5Map[h] ?? '?');
    return angkaArray.join(' ');
  }
  
  // ==============================================
  // Test Case sesuai hasil dari Step 4
  // ==============================================
  const output1 = "A B E F I A B B E"; // hasil Step 4 input 1
  const output2 = "A B E F I J B E";   // hasil Step 4 input 2
  
  console.log("Step 5 Output 1:", step5_convertToNumbers(output1)); // 1 1 3 3 5 1 1 1 3
  console.log("Step 5 Output 2:", step5_convertToNumbers(output2)); // 1 1 3 3 5 5 1 3
  //Step 5 clear