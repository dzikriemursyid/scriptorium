// HTML Fragment
// const mhs = {
//   nama: "Dzikri Mursyid",
//   universitas: "Universitas Negeri Jakarta",
//   prodi: "Pendidikan Bahasa Inggris",
//   fakultas: "Fakultas Bahasa dan Seni",
//   semester: 8,
// };

// const htmlFrag = `<div class="mhs">
// <span>Halo saya ${mhs.nama}, dari ${mhs.universitas} prodi ${mhs.prodi} ${mhs.fakultas}, semester ${mhs.semester}.</span>
// </div>`;

// HTML Fragment - Looping
// const mhs = [
//   {
//     nama: "Dzikri Mursyid",
//     email: "dzikri@gmail.com",
//   },
//   {
//     nama: "Erik",
//     email: "erik@gmail.com",
//   },
//   {
//     nama: "Bobby",
//     email: "bobby@gmail.com",
//   },
// ];

// const htmlFrag = `<div class="mhs">
//     ${mhs
//       .map(
//         (m) => `<ul>
//     <li>${m.nama}</li>
//     <li>${m.email}</li>
//     </ul>`
//       )
//       .join("")}
// </div>`;

// HTML Fragment - Conditional
// const playlist = {
//   lagu: "Payphone",
//   penyanyi: "Maroon 5",
//   feat: "Wiz Khalifa",
// };

// const htmlFrag = `<div class="playlist">
// <ul>
//     <li>${playlist.penyanyi} ${playlist.feat ? `(feat) ${playlist.feat}` : ""}</li>
//     <li>${playlist.lagu}</li>
// </ul>
// </div>`;

// HTML Fragment - Nested Fragment
// const mhs = {
//   nama: "Dzikri Mursyid",
//   semester: 8,
//   mataKuliah: ["Skripsi", "RELLE"],
// };

// function cetakMataKuliah(matkul) {
//   return `
//   <ol class="mk">
//     ${matkul.map((m) => `<li class="mk">${m}</li>`).join("")}
//   </ol>`;
// }

// const htmlFrag = `<div class="mhs">
// <span class="nama">Nama: ${mhs.nama}</span>
// <br>
// <span class="smt">Semester: ${mhs.semester}</span>
// <br>
// <span class="mt">Mata Kuliah:</span>
// ${cetakMataKuliah(mhs.mataKuliah)}
// </div>`;

//* document.body.innerHTML = htmlFrag;
