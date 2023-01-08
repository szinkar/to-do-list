import { setToCookie } from '../utils/setToCookie.js'
import { clearField } from '../utils/clearField.js'
import { checkTextBtn } from '../utils/checkTextBtn.js'
import { outputButton } from '../utils/outputButton.js'
import { messageOutput } from '../utils/messageOutput.js'
import { deletingMessageBlock } from '../utils/deletingMessageBlock.js'

const removeItems = ({ blockList, clearBtn, mainBlock, array, input }, value) => {
  blockList.innerHTML = ''
  value.length = 0
  setToCookie('tasks', value)
  clearField(input)
  checkTextBtn(value, input)
  outputButton(clearBtn, value)
  messageOutput(mainBlock, array, 'empty list')
  deletingMessageBlock()
}

export {removeItems}