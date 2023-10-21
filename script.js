const content = document.querySelector('.content')
const h2 = document.querySelector('h2')
const lineBr = document.createElement('br')


document.addEventListener('keydown', (e) => {
  console.log(e.key)

  if (e.key === 'Enter') {
    h2.appendChild(lineBr)

  } else if (e.key === 'Backspace') {
    let text = h2.innerHTML.slice(0, h2.innerHTML.length - 1)

    h2.innerHTML = text

  }else {
    h2.innerHTML += e.key
  }

})


