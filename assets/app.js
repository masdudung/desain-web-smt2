// addEventListener DOMContentLoaded berfungsi agar 
// semua script yg kita tulis dalam function ini dijalankan setelah semua elemen html 
// selesai di render/load oleh browser
document.addEventListener('DOMContentLoaded', function() {
    // pertama kita beri index 0
    let sliderIndex = 0;

    // kemudian kita coba ambil element berdasarkan nama class, 
    // asumsinya kita hanya punya 1 elemen class slider pada page ini 
    let slider = document.getElementsByClassName('slider')

    // seletah elemen ditemukan, maka kita akan mencoba cari tag img pada class slider
    let sliderItems = slider[0].getElementsByTagName('img');
    
    // kita buat fungsi slide menggunakan arrow function
    // function ini akan dipanggil setiap beberapa detik menggunakan fungsi interval pada javascript
    const showNextSlide = () => {
        // slider index yg awalnya 0 dan punya class active akan di hilangkan classnya
        // ini efeknya visibili class active yg semula 1, menjadi 0 seperti bawaan pada tag img
        sliderItems[sliderIndex].classList.remove('active');
        
        // setelah img pertama tidak terlihat, maka kita harus menambah value pada sliderindex
        // ditambahkan 1, yg jika di modulus dengan jumlah total img yg ditemukan
        // maka otomatis membuat max indexnya sama dengan jumlah total img yg ditemukan
        sliderIndex = (sliderIndex + 1) % sliderItems.length;

        // setelah indexnya di update, maka kita perlu menambah class active pada index tersebut
        sliderItems[sliderIndex].classList.add('active');
    }

    // ini akan berulang ulang setiap 4 detik
    setInterval(showNextSlide, 4000);
});