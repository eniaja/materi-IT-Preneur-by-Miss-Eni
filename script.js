javascript
function pesan(namaProduk) {

    const nomorWhatsApp = "6281234567890";

    const pesan =
        "Halo, saya tertarik dengan produk: " +
        namaProduk;

    const url =
        "https://wa.me/" +
        nomorWhatsApp +
        "?text=" +
        encodeURIComponent(pesan);

    window.open(url, "_blank");
}