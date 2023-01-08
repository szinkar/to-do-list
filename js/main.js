import { renderDataFromCookie } from './modules/renderDataFromCookie.js'
import { checkCookie } from './modules/checkCookie.js'
import { addTask } from './modules/addTask.js'
import { removeItems } from './modules/removeItems.js'
import { removeItem } from './modules/removeItem.js'
import { editItem } from './modules/editItem.js'

const form = document.querySelector('.todolist__form')
const taskInput = document.querySelector('.todolist__form-input')
const primaryBlockToDoList = document.querySelector('.todolist')
const cleanerBtn = document.querySelector('.todolist__clear')
const blockTodolist = document.querySelector('.todolist__block')

const messages = [
  {
    message: 'Please enter value',
    type: 'danger',
    cause: 'none value',
  },
  {
    message: 'Item removed',
    type: 'danger',
    cause: 'item removed',
  },
  {
    message: 'Empty list',
    type: 'danger',
    cause: 'empty list',
  },
  {
    message: 'Item added to the list',
    type: 'success',
    cause: 'item added to the list',
  },
  {
    message: 'Value changed',
    type: 'success',
    cause: 'value changed',
  },
  {
    element: '',
  },
]

let tasks = []

const parameters = {
  key: 'tasks',
  blockList: blockTodolist,
  array: messages,
  mainBlock: primaryBlockToDoList,
  clearBtn: cleanerBtn,
  input: taskInput,
}

form.addEventListener('submit', (e) => addTask(e, parameters, tasks))
cleanerBtn.addEventListener('click', () => removeItems(parameters, tasks))
blockTodolist.addEventListener('click', (e) => removeItem(e, parameters, tasks))
blockTodolist.addEventListener('click', (e) => editItem(e, parameters))

tasks = checkCookie(parameters)
// console.log(tasks)
renderDataFromCookie(parameters, tasks)
