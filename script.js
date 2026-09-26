javascript
function pesan(namaProduk) {

    const nomorWhatsApp = "6289698034928";

    const pesan =
        "Halo, saya tertarik dengan produk: " +
        namaProduk;

    const url =
        "https://wa.me/6289698034928" +
        nomorWhatsApp +
        "?text=" +
        encodeURIComponent(pesan);

    window.open(url, "_blank");
}
