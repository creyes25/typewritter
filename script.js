const typingAudio = new Audio('https://www.soundjay.com/communication/sounds/typewriter-key-1.mp3')
const backspaceAudio = new Audio('https://www.soundjay.com/communication/sounds/typewriter-backspace-1.mp3')
const enterAudio = new Audio('https://www.soundjay.com/communication/sounds/typewriter-paper-1.mp3')
const h2 = document.querySelector('h2')
const lineBr = document.createElement('br')


function playAudio(audio) {
  audio.currentTime = 0
  audio.play()
}

document.addEventListener('keydown', (e) => {
  console.log(e.key)

  if (e.key === 'Enter') {
    playAudio(enterAudio)
    h2.appendChild(lineBr)

  } else if (e.key === 'Backspace') {
    playAudio(backspaceAudio)
    let text = h2.innerHTML.slice(0, h2.innerHTML.length - 1)
    h2.innerHTML = text

  }else {
    playAudio(typingAudio)
    h2.innerHTML += e.key
  }
})


