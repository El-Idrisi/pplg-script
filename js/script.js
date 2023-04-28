const hambuger = document.querySelector("#hambuger");
const menuNavbar = document.querySelector("#nav-bar");

hambuger.addEventListener("click", function () {
  hambuger.classList.toggle("hambuger-active");
  menuNavbar.classList.toggle("translate-x-full");
});

let pohon_1 = document.getElementById("pohon-1");
let pohon_2 = document.getElementById("pohon-2");
let pohon_3 = document.getElementById("pohon-3");
let pohon_4 = document.getElementById("pohon-4");
let tanah_1 = document.getElementById("tanah-1");
let tanah_2 = document.getElementById("tanah-2");
let gunung = document.getElementById("gunung");
let bintang = document.getElementById("bintang");
let judul = document.getElementById("judul");

let aboutImg = document.querySelector("#about-img")

window.onscroll = () => {
  let y = window.scrollY;
  console.log(screen.width);
  console.log(y)
  if (screen.width < 768) {
    judul.style.transform = `translateY(${y / 2}px)`;
    bintang.style.transform = `translateY(${y / 1}px)`;
    gunung.style.transform = `translateY(${y / 6}px)`;
    pohon_4.style.transform = `translateY(${y / 7}px)`;
    pohon_3.style.transform = `translateY(${y / 7}px)`;
    tanah_2.style.transform = `translateY(${y / 10}px)`;
    tanah_1.style.transform = `translateY(${y / 13}px)`;
    pohon_2.style.transform = `translateY(${y / 16}px)`;
    pohon_1.style.transform = `translateY(${y / 16}px)`;
  } else if (screen.width >= 768 && screen.width < 1024) {
    judul.style.transform = `translateY(${y / 2}px)`;
    bintang.style.transform = `translateY(${y / 1}px)`;
    gunung.style.transform = `translateY(${y / 4}px)`;
    pohon_4.style.transform = `translateY(${y / 5}px)`;
    pohon_3.style.transform = `translateY(${y / 5}px)`;
    tanah_2.style.transform = `translateY(${y / 8}px)`;
    tanah_1.style.transform = `translateY(${y / 11}px)`;
    pohon_2.style.transform = `translateY(${y / 14}px)`;
    pohon_1.style.transform = `translateY(${y / 14}px)`;
  } else {
    judul.style.transform = `translateY(${y / 3.7}px)`;
    bintang.style.transform = `translateY(${y / 1.7}px)`;
    gunung.style.transform = `translateY(${y / 2.5}px)`;
    pohon_4.style.transform = `translateY(${y / 3.5}px)`;
    pohon_3.style.transform = `translateY(${y / 3.5}px)`;
    tanah_2.style.transform = `translateY(${y / 6}px)`;
    tanah_1.style.transform = `translateY(${y / 9}px)`;
    pohon_2.style.transform = `translateY(${y / 12}px)`;
    pohon_1.style.transform = `translateY(${y / 12}px)`;
  }
  // 654

};
