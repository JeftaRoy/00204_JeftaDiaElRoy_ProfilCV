// Langkah 2 · Cek koneksi file
console.log("script.js terhubung!");

// Langkah 3 · Variabel, tipe data, object
const profil = {
  nama: "Jefta Dia El Roy",
  prodi: "Sistem Informasi",
  semester: 3,
};

const sapaan = `Halo, saya ${profil.nama}, mahasiswa ${profil.prodi} semester ${profil.semester}.`;
console.log(sapaan);
console.log(typeof profil.nama, typeof profil.semester);

// Langkah 4 · Array of object + loop
const keahlian = [
  { nama: "HTML5", level: "mahir" },
  { nama: "CSS3", level: "mahir" },
  { nama: "Editing Foto & Video", level: "mahir" },
  { nama: "Roblox Studio & Scripting (Lua)", level: "mahir" },
  { nama: "Tailwind CSS", level: "belajar" },
  { nama: "JavaScript", level: "belajar" },
  { nama: "Pemrograman Dasar (C++)", level: "belajar" },
  { nama: "PHP", level: "belajar" },
  { nama: "MySQL", level: "belajar" },
  { nama: "Database Management", level: "belajar" },
  { nama: "UI/UX Design Dasar", level: "belajar" },
];

console.log(`Jumlah keahlian: ${keahlian.length}`);

for (const skill of keahlian) {
  console.log(`${skill.nama} (${skill.level})`);
}

// Langkah 5 · Fungsi + percabangan -> render ke halaman
const daftarSkill = document.getElementById("daftar-skill");

const buatPil = (skill) => {
  const li = document.createElement("li");
  li.textContent = skill.nama;
  li.className = "flex items-center justify-center h-full text-sm font-semibold px-3 py-3 rounded-xl text-center";

  if (skill.level === "mahir") {
    li.classList.add(
      "bg-[#404040]",
      "text-white",
      "dark:bg-[#525252]",
      "dark:text-white"
    );
  } else {
    li.classList.add(
      "bg-[#e5e5e5]",
      "text-[#404040]",
      "dark:bg-[#333333]",
      "dark:text-[#d4d4d4]"
    );
  }

  return li;
};

for (const skill of keahlian) {
  daftarSkill.append(buatPil(skill));
}

// Langkah 7 · Hamburger: buka/tutup menu
const tombolMenu = document.querySelector("#tombol-menu");
const menuNav = document.querySelector("#menu-nav");

const toggleMenu = () => {
  menuNav.classList.toggle("hidden");
  menuNav.classList.toggle("flex");
};

tombolMenu.addEventListener("click", toggleMenu);

// Langkah 8 · Tutup menu setelah link diklik
const tutupMenu = () => {
  menuNav.classList.add("hidden");
  menuNav.classList.remove("flex");
};

const linkMenu = document.querySelectorAll("#menu-nav a");

for (const link of linkMenu) {
  link.addEventListener("click", tutupMenu);
}

// Accordion tentang saya
const tombolTentang = document.querySelector("#tombol-tentang");
const isiTentang = document.querySelector("#isi-tentang");
const ikonTentang = document.querySelector("#ikon-tentang");

tombolTentang.addEventListener("click", () => {
  isiTentang.classList.toggle("hidden");

  if (isiTentang.classList.contains("hidden")) {
    ikonTentang.textContent = "▸";
  } else {
    ikonTentang.textContent = "▾";
  }
});

// Pilihan 1 · Accordion pendidikan
const tombolPendidikan = document.querySelector("#tombol-pendidikan");
const isiPendidikan = document.querySelector("#isi-pendidikan");
const ikonPendidikan = document.querySelector("#ikon-pendidikan");

tombolPendidikan.addEventListener("click", () => {
  isiPendidikan.classList.toggle("hidden");

  if (isiPendidikan.classList.contains("hidden")) {
    ikonPendidikan.textContent = "▸";
  } else {
    ikonPendidikan.textContent = "▾";
  }
});

// Accordion keahlian
const tombolKeahlian = document.querySelector("#tombol-keahlian");
const isiKeahlian = document.querySelector("#isi-keahlian");
const ikonKeahlian = document.querySelector("#ikon-keahlian");

tombolKeahlian.addEventListener("click", () => {
  isiKeahlian.classList.toggle("hidden");

  if (isiKeahlian.classList.contains("hidden")) {
    ikonKeahlian.textContent = "▸";
  } else {
    ikonKeahlian.textContent = "▾";
  }
});

// Accordion pengalaman organisasi
const tombolOrganisasi = document.querySelector("#tombol-organisasi");
const isiOrganisasi = document.querySelector("#isi-organisasi");
const ikonOrganisasi = document.querySelector("#ikon-organisasi");

tombolOrganisasi.addEventListener("click", () => {
  isiOrganisasi.classList.toggle("hidden");

  if (isiOrganisasi.classList.contains("hidden")) {
    ikonOrganisasi.textContent = "▸";
  } else {
    ikonOrganisasi.textContent = "▾";
  }
});

// Accordion pengalaman kerja
const tombolPengalaman = document.querySelector("#tombol-pengalaman");
const isiPengalaman = document.querySelector("#isi-pengalaman");
const ikonPengalaman = document.querySelector("#ikon-pengalaman");

tombolPengalaman.addEventListener("click", () => {
  isiPengalaman.classList.toggle("hidden");

  if (isiPengalaman.classList.contains("hidden")) {
    ikonPengalaman.textContent = "▸";
  } else {
    ikonPengalaman.textContent = "▾";
  }
});

// Accordion kontak
const tombolKontak = document.querySelector("#tombol-kontak");
const isiKontak = document.querySelector("#isi-kontak");
const ikonKontak = document.querySelector("#ikon-kontak");

tombolKontak.addEventListener("click", () => {
  isiKontak.classList.toggle("hidden");

  if (isiKontak.classList.contains("hidden")) {
    ikonKontak.textContent = "▸";
  } else {
    ikonKontak.textContent = "▾";
  }
});

// Pilihan 2 · Mode gelap
const tombolTema = document.querySelector("#tombol-tema");

tombolTema.addEventListener("click", () => {
  document.documentElement.classList.toggle("dark");

  if (document.documentElement.classList.contains("dark")) {
    tombolTema.textContent = "☀️ Mode terang";
  } else {
    tombolTema.textContent = "🌙 Mode gelap";
  }
});