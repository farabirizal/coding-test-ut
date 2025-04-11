# coding-test-ut
catatan :
Step 1 – Konversi Kalimat Menjadi Deretan Angka
Fungsi:

mapCharToNumber(char)

convertToNumber(sentence)

Huruf besar dan kecil diubah ke angka sesuai kamus kamus.upper dan kamus.lower. Spasi dihitung sebagai 0.

=========================================================================================================

Step 2 – Hitung Jumlah Angka dengan Pola Selang-seling (+ - + -)
Fungsi:

alternatingSum(numbers)

Angka dijumlahkan dengan pola: angka pertama ditambah, kedua dikurang, ketiga ditambah lagi, dan seterusnya.

=========================================================================================================

Step 3 – Konversi Total Angka Menjadi Huruf Kapital
Fungsi:

numberToSequence(total)

step3_convertNumberToLetters(step2Result)

Total dari step 2 diubah menjadi deretan angka dengan pola [0,1,2,3,4,5] berulang, lalu dikonversi ke huruf kapital menggunakan kamus.digitToLetter.

=========================================================================================================

Step 4 – Ganti 2 Huruf Terakhir Berdasarkan Total Baru

ABEFIABAB ke total = 13 → B E → A B E F I A B B E

ABEFIJAB ke override total = 12 → B E → A B E F I J B E
Fungsi:

hurufKeTotalAngka(kalimat)

digitKeHuruf(total)

step4_transform(step3String)

Huruf kapital dari step 3 dihitung kembali totalnya, lalu 2 huruf terakhir diganti dengan hasil konversi dari total baru.

=========================================================================================================

Step 5 – Konversi Huruf Akhir ke Angka Sesuai Kamus Final
A B E F I A B B E ke 1 1 3 3 5 1 1 1 3
A B E F I J B E ke 1 1 3 3 5 5 1 3
Fungsi:
step5_convertToNumbers(step4Output)

Huruf dari step 4 diubah menjadi angka berdasarkan kamus.hurufToFinal, sesuai instruksi akhir dari soal.

=========================================================================================================
