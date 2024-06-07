var theme = document.getElementById("tema"),
  tema = document.getElementById("theme"),
  humberger = document.querySelector(".menu"),
  sidebar = document.querySelector(".sidebar"),
  close = document.getElementById("close"),
  map = document.getElementById("map");

theme.onclick = function () {
  document.body.classList.toggle("dark-theme");
  if (document.body.classList.contains("dark-theme")) {
    theme.src = "/img/sun-.png";
    tema.src = "/img/sun-.png";
    humberger.src = "/img/menu.png";
    close.src = "/img/x.png";
    map.src = "/img/map-putih.png";
  } else {
    theme.src = "/img/moon.svg";
    tema.src = "/img/moon.svg";
    humberger.src = "/img/menu.svg";
    close.src = "/img/x.svg";
    map.src = "/img/map-hitam.png";
  }
};

close = document.querySelector(".close");
humberger.onclick = function () {
  humberger.addEventListener("click", () => {
    sidebar.classList.add("active");
  });
};
tema.onclick = function () {
  document.body.classList.toggle("dark-theme");
  if (document.body.classList.contains("dark-theme")) {
    theme.src = "/img/sun-.png";
    tema.src = "/img/sun-.png";
    humberger.src = "/img/menu.png";
    close.src = "/img/x.png";
    map.src = "/img/map-putih.png";
  } else {
    theme.src = "/img/moon.svg";
    tema.src = "/img/moon.svg";
    humberger.src = "/img/menu.svg";
    close.src = "/img/x.svg";
    map.src = "/img/map-hitam.png";
  }
};
close.onclick = function () {
  close.addEventListener("click", () => {
    sidebar.classList.remove("active");
  });
};

var cari = document.querySelector(".cari"),
  domain = document.querySelector(".sub-domain"),
  hapus = document.querySelector(".hapus"),
  input = document.querySelector(".input");

cari.onclick = function () {
  if (input == null && input == "") {
    confirm("WAJIB ISI INPUT!");
  } else {
    cari.addEventListener("click", () => {
      domain.classList.add("active");
    });
  }

  hapus.onclick = function () {
    hapus.addEventListener("click", () => {
      domain.classList.remove("active");
    });
  };
};

const btn = document.querySelector(".beli-domain"),
  alert = document.querySelector(".alert"),
  tutup = document.querySelector(".tutup"),
  line = document.querySelector(".line");

btn.addEventListener("click", () => {
  alert.classList.add("active");
  line.classList.add("active");
  setTimeout(() => {
    alert.classList.remove("active");
  }, 5000);
  setTimeout(() => {
    line.classList.remove("active");
  }, 5300);
});

tutup.addEventListener("click", () => {
  alert.classList.remove("active");

  setTimeout(() => {
    line.classList.remove("active");
  }, 5300);
});
