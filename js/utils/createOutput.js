import { messageDefinition } from './messageDefinition.js'

const createOutput = (array, indicator) => {
  const message = messageDefinition(array, indicator)
  const elem = document.querySelector('.todolist__message')
  
  if(elem) return [ message[0].message, message[0].type ]

  if(!elem) return `<div class="todolist__message todolist__message_${message[0].type}">${message[0].message}</div>`
}

export {createOutput}