import { checkField } from '../utils/checkField.js'
import { outputTask } from '../utils/outputTask.js'
import { addTaskToArray } from '../utils/addTaskToArray.js'
import { setToCookie } from '../utils/setToCookie.js'
import { outputButton } from '../utils/outputButton.js'
import { messageOutput } from '../utils/messageOutput.js'
import { deletingMessageBlock } from '../utils/deletingMessageBlock.js'
import { clearField } from '../utils/clearField.js'
import { changeTaskInArray } from '../utils/changeTaskInArray.js'

const addTask = (e, { input, blockList, clearBtn, mainBlock, array }, value) => {
  e.preventDefault()
  const taskText = input.value
  const textBtn = input.nextElementSibling.innerHTML
  const editableItem = array.element
  const newTask = {
    id: Date.now(),
    text: taskText,
  }

  if (!checkField(input) && textBtn === 'Submit') {
    outputTask(taskText, blockList, newTask.id)
    addTaskToArray(value, newTask)
    setToCookie('tasks', value)
    // console.log(value)
    outputButton(clearBtn, value)
    messageOutput(mainBlock, array, 'item added to the list')
    deletingMessageBlock()
  }

  if (!checkField(input) && textBtn === 'Edit') {
    editableItem.children.item(0).innerHTML = input.value
    changeTaskInArray(value, editableItem, input)
    setToCookie('tasks', value)
    input.nextElementSibling.innerHTML = 'Submit'
    messageOutput(mainBlock, array, 'value changed')
    deletingMessageBlock()
  }

  if (checkField(input)) {
    messageOutput(mainBlock, array, 'none value')
    deletingMessageBlock()
  }
  clearField(input)
}

export {addTask}