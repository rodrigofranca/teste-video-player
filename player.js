const videoEvents = [
  "loadstart", "durationchange", "loadedmetadata", "loadeddata", /*"progress",*/
  "canplay", "canplaythrough", "play", "pause", "playing", "waiting", "seeking",
  "seeked", "stalled", /*"suspend",*/ "abort", "error", "emptied", "ended",
  "ratechange", /*"timeupdate",*/ "volumechange", "resize", "enterpictureinpicture",
  "leavepictureinpicture", "cuechange"
];

export function setupVideoPlayer(video) {

  videoEvents.forEach(event => {
    video.addEventListener(event, () => {
      console.log(event)
    })
  })

  window.addEventListener('DOMContentLoaded', () => {

    console.log('DOMContentLoaded');

    video.play()
      .catch(_ => {
        video.muted = true;
        video.play()
      })

  });

}
