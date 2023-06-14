export default function webCam(id) {
  const $video = document.getElementById(id);

  // console.log(navigator.mediaDevices.getUserMedia)

/*   if (navigator.mediaDevices.getUserMedia) {
    navigator.mediaDevices
      .getUserMedia({ video: true, audio: true })
      .then((stream) => {
        console.log(stream);
        $video.srcObject = stream;
        $video.play();
      })
      .catch((err) => console.log(`Sucedio el siguiente error: ${err}!!!`));
  } */
}
