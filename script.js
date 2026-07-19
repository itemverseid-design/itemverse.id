document.addEventListener("DOMContentLoaded", () => {
    console.log("ITEMVERSE Website Ready!");

    const buttons = document.querySelectorAll(".btn");

    buttons.forEach(button => {
        button.addEventListener("mouseenter", () => {
            button.style.transform = "scale(1.05)";
        });

        button.addEventListener("mouseleave", () => {
            button.style.transform = "scale(1)";
        });
    });
});
function kirimOrder() {
    var nama = document.getElementById("nama").value;
    var layanan = document.getElementById("layanan").options[document.getElementById("layanan").selectedIndex].text;
    var target = document.getElementById("target").value;
    var jumlah = document.getElementById("jumlah").value;

    var pesan = "Halo ITEMVERSE, saya ingin order.\n\n" +
        "👤 Nama: " + nama + "\n" +
        "📦 Layanan: " + layanan + "\n" +
        "🔗 Target: " + target + "\n" +
        "📊 Jumlah: " + jumlah;

    window.open("https://wa.me/6287785080652?text=" + encodeURIComponent(pesan), "_blank");
}
const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {
  topBtn.style.display = window.scrollY > 300 ? "block" : "none";
});

topBtn.onclick = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};
