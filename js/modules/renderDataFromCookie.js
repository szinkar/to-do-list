import { outputTask } from '../utils/outputTask.js'
import { outputButton } from '../utils/outputButton.js'

const renderDataFromCookie = ({ blockList, clearBtn }, value) => {
  value.forEach((task) => {
    outputTask(task.text, blockList, task.id)
  })
  outputButton(clearBtn, value)
}

export {renderDataFromCookie}