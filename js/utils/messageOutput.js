import { createOutput } from './createOutput.js'

const messageOutput = (mainBlock, array, indicator) => {

  const setMessage = createOutput(array, indicator)
  const elem = document.querySelector('.todolist__message')

  if(elem) {
    elem.textContent = setMessage[0]
    const checkClass = elem.classList.contains(`todolist__message_${setMessage[1]}`)
    const arrEl = elem.classList[1]
    checkClass ? null : elem.classList.replace(`${arrEl}`, `todolist__message_${setMessage[1]}`)
  }

  if(!elem) mainBlock.insertAdjacentHTML('afterbegin', setMessage)

}

export {messageOutput}