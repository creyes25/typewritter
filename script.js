const typingAudio = new Audio('https://www.soundjay.com/communication/sounds/typewriter-key-1.mp3')
const backspaceAudio = new Audio('https://www.soundjay.com/communication/sounds/typewriter-backspace-1.mp3')
const enterAudio = new Audio('https://www.soundjay.com/communication/sounds/typewriter-paper-1.mp3')
const h2 = document.querySelector('h2')
const lineBr = document.createElement('br')



// function to play audio
function playAudio(audio) {
  // if audio is playing then it will create a clone, so clone will play to prevent audio overlap
  if(!typingAudio.paused || !backspaceAudio.paused) {
    audio.cloneNode(true).play()
  } else {
    audio.play()
  }
}


// event listener after eack key is pressed
document.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    playAudio(enterAudio)
    h2.appendChild(lineBr) // adds a br after pressing enter

  } else if (e.key === 'Backspace') {
    playAudio(backspaceAudio)
    h2.removeChild(h2.lastChild) // remoces last span from h2

  }else if (e.key === ' ') {
    playAudio(typingAudio)
    h2.innerHTML += e.key // adds a space 
  } else {
    playAudio(typingAudio)
    const newLetter = document.createElement('span')
    newLetter.textContent = e.key
    newLetter.classList.add('animated-letter') // adds animation
    h2.appendChild(newLetter) // appends new span into h2
  }
})


