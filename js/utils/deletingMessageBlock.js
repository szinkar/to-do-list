const deletingMessageBlock = () => {
  const elem = document.querySelector('.todolist__message')
  elem && setTimeout(() => elem.remove(), 3000)
}

export {deletingMessageBlock}