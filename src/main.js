import string from './css.js'

const audio = new Audio('../public/music/PapaMamaLocaPipa.m4a')
const player = {
  id: undefined,
  time: 100,
  ui: {
    demo: document.querySelector('.code'),
    demo2: document.querySelector('.minionStyle'),
    codeArea: document.querySelector('.codeArea')
  },
  events: {
    '.btnPause': 'pause',
    '.btnPlay': 'play',
    '.btnSlow': 'slow',
    '.btnNormal': 'normal',
    '.btnFast': 'fast',
    '.btnMusic': 'music'
  },
  n: 1,
  init: () => {
    player.ui.demo.innerText = string.substr(0, player.n)
    player.ui.demo2.innerHTML = string.substr(0, player.n)
    player.bindEvents()
    player.play()
  },
  bindEvents: () => {
    for (let key in player.events) {
      if (player.events.hasOwnProperty(key)) {
        const value = player.events[key] // pause / play / slow
        document.querySelector(key).addEventListener('click', player[value])
      }
    }
    
  },
  run: (event) => {
    console.log(event)
    player.n += 1
    if (player.n > string.length) {
      window.clearInterval(player.id)
      return
    }
    player.ui.demo.innerText = string.substr(0, player.n)
    player.ui.demo2.innerHTML = string.substr(0, player.n)
    player.ui.codeArea.scrollTop = player.ui.demo.scrollHeight
  },
  play: () => {
    window.clearInterval(player.id)
    player.id = setInterval(player.run, player.time)
  },
  pause: () => {
    window.clearInterval(player.id)
  },
  slow: () => {
    player.pause()
    player.time = 200
    player.play()
  },
  normal: () => {
    player.pause()
    player.time = 100
    player.play()
  },
  fast: () => {
    audio.play().then()
    player.pause()
    player.time = 0
    player.play()
  },
  music: () => {
    if (audio.paused){
      audio.play().then()
    }else {
      audio.pause()
    }
  }
}

player.init()
