
const editItem = (e, { input, array } ) => {
  const valueAttribute  = e.target.dataset.action

  if(valueAttribute === 'edit') {
    const taskText = e.target.closest('article').children.item(0).innerHTML
    input.value = taskText
    input.focus()
    input.nextElementSibling.innerHTML = 'Edit'
    array.element = e.target.closest('article')
  }
}

export {editItem}