import './style.css'
import { setupVideoPlayer } from './player.js'

const src = 'https://sample-videos.com/video321/mp4/720/big_buck_bunny_720p_10mb.mp4'

document.querySelector('#app').innerHTML = `
  <video src=${src} controls>
`

setupVideoPlayer(document.querySelector('video'))
