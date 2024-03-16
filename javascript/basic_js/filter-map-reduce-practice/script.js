const videos = Array.from(document.querySelectorAll("[data-duration]"));

let jsLanjut = videos
  .filter((video) => video.textContent.includes("JAVASCRIPT LANJUTAN"))
  .map((item) => item.dataset.duration)
  .map((time) => {
    const totalTime = time.split(":").map((totalTime) => parseInt(totalTime));
    return totalTime[0] * 60 + totalTime[1];
  })
  .reduce((acc, curr) => acc + curr);

const hours = Math.floor(jsLanjut / 3600);
jsLanjut = jsLanjut - hours * 3600;
const minutes = Math.floor(jsLanjut / 60);
const seconds = jsLanjut - minutes * 60;

const jumlahVideo = document.querySelector(".jumlah-video");
jumlahVideo.textContent = videos.filter((video) => video.textContent.includes("JAVASCRIPT LANJUTAN")).length + " Video";

const totalDurasi = document.querySelector(".total-durasi");
totalDurasi.textContent = `${hours} Jam, ${minutes} Menit, ${seconds} Detik.`;
