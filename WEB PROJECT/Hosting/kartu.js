var basic = document.getElementById("basic"),
  tutupbasic = document.getElementById("tutup-basic"),
  kartu = document.querySelector(".kartu-basic"),
  belibasic = document.getElementById("belibasic");

basic.onclick = function () {
  basic.addEventListener("click", () => {
    kartu.classList.add("active");
  });

  tutupbasic.onclick = function () {
    tutupbasic.addEventListener("click", () => {
      kartu.classList.remove("active");
    });
  };
};

const bttn = document.querySelector("#belibasic"),
  alert = document.querySelector(".hosting-alert"),
  tutup = document.querySelector(".tutup"),
  line = document.querySelector(".line"),
  beliprem = document.querySelector("#beliprem"),
  belipro = document.querySelector("#belipro");

bttn.addEventListener("click", () => {
  alert.classList.add("active");
  line.classList.add("active");
  setTimeout(() => {
    alert.classList.remove("active");
  }, 5000);
  setTimeout(() => {
    line.classList.remove("active");
  }, 5300);
});
beliprem.addEventListener("click", () => {
  alert.classList.add("active");
  line.classList.add("active");
  setTimeout(() => {
    alert.classList.remove("active");
  }, 5000);
  setTimeout(() => {
    line.classList.remove("active");
  }, 5300);
});
belipro.addEventListener("click", () => {
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

var kartuprem = document.querySelector(".kartu-prem"),
  tutuprem = document.getElementById("tutup-prem"),
  detail = document.getElementById("premium"),
  detailpro = document.getElementById("proplus"),
  tutupro = document.getElementById("tutup-pro"),
  procard = document.querySelector(".kartu-pro");

detail.onclick = function () {
  detail.addEventListener("click", () => {
    kartuprem.classList.add("active");
  });
};

tutuprem.onclick = function () {
  tutuprem.addEventListener("click", () => {
    kartuprem.classList.remove("active");
  });
};

detailpro.onclick = function () {
  detailpro.addEventListener("click", () => {
    procard.classList.add("active");
  });
};

tutupro.onclick = function () {
  tutupro.addEventListener("click", () => {
    procard.classList.remove("active");
  });
};

var theme = document.getElementById("tema"),
  tema = document.getElementById("theme"),
  humberger = document.querySelector(".menu"),
  sidebar = document.querySelector(".sidebar"),
  close = document.getElementById("close");

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
