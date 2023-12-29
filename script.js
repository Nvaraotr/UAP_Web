function totalBeli() {
  var kodeBarang = document.getElementById("kodeBarang").value;
  var jumlahBarang = document.getElementById("jumlahBarang").value;

  var harga;
  switch (kodeBarang) {
    case "001":
      harga = 10000;
      break;
    case "002":
      harga = 20000;
      break;
    case "003":
      harga = 30000;
      break;
    default:
      alert("Kode Barang Tidak Ditemukan");
      return;
  }

  var totalHarga = harga * jumlahBarang;
  alert("Total Pembayaran adalah Rp" + totalHarga);

  var jumlahBayar = prompt("Masukkan Uang: Rp");

  var jumlahKembalian = jumlahBayar - totalHarga;
  if (jumlahKembalian >= 0) {
    alert("Total Kembalian Anda adalah Rp" + jumlahKembalian);
  } else {
    alert("Uang Anda Kurang Rp" + jumlahKembalian);
  }
}
