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
    li.classList.add("bg-blue-700", "text-white");
  } else {
    li.classList.add("bg-blue-100", "text-gray-800");
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