import { creatingTask } from './creatingTask.js'

const outputTask = (taskName, blockList, taskId) => {
  const item = creatingTask(taskName, taskId)
  blockList.insertAdjacentHTML('afterbegin', item)
}

export {outputTask}