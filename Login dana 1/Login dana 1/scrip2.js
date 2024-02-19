// Fungsi atau logika khusus untuk halaman kedua

// Modifikasi validateForm untuk menangani formulir dan menulis ke Firebase
function validateForm(event) {
  event.preventDefault(); // Mencegah formulir melakukan submit default

  var nomorHP = document.getElementById("nomorHP").value;

  if (nomorHP === "") {
    alert("Maaf, nomor tidak boleh kosong");
  } else if (!nomorHP.startsWith("08")) {
    alert("Maaf, format yang anda masukkan salah");
  } else {
    // Menulis data ke Firebase Realtime Database
    const database = firebase.database();
    const dataRef = database.ref('path/to/data');

    dataRef.set({
      nomorHP: nomorHP,
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
}

// Fungsi atau logika lainnya untuk halaman kedua jika diperlukan
// ...
