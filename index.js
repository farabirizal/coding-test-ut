// DATA TES — HARUSNYA HASILNYA 12
const angkaTitanic = [7, 5, 2, 9, 4, 5, 8];

function alternatingSum(numbers) {
    return numbers.reduce((acc, num, idx) => {
      if (idx === 0 || idx % 2 === 1) {
        return acc + num; // index 0 dan ganjil → tambah
      } else {
        return acc - num; // index genap (selain 0) → kurang
      }
    }, 0);
  }

const hasil = alternatingSum(angkaTitanic);

console.log("Hasil akhir:", hasil); // Harus 12
