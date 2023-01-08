import { removeElementOfArray } from '../utils/removeElementOfArray.js'
import { clearField } from '../utils/clearField.js'
import { checkTextBtn } from '../utils/checkTextBtn.js'
import { messageOutput } from '../utils/messageOutput.js'
import { deletingMessageBlock } from '../utils/deletingMessageBlock.js'
import { setToCookie } from '../utils/setToCookie.js'
import { removeCleanerBtn } from '../utils/removeCleanerBtn.js'

const removeItem = (e, { blockList, clearBtn, mainBlock, array, input }, value) => {
  const valueAttribute = e.target.dataset.action
  const collectionElems = blockList.children.length
  // ++++++++++++++++++++++++++++++++++++++++++++++
  let currentElement = e.target.closest('article')

  if (valueAttribute === 'delete' && collectionElems > 1) {
    currentElement.remove()
    removeElementOfArray(value, currentElement)
    clearField(input)
    checkTextBtn(value, input)
    messageOutput(mainBlock, array, 'item removed')
    deletingMessageBlock()
  }

  if (valueAttribute === 'delete' && collectionElems === 1) {
    currentElement.remove()
    removeElementOfArray(value, currentElement)
    clearField(input)
    checkTextBtn(value, input)
    messageOutput(mainBlock, array, 'empty list')
    deletingMessageBlock()
    removeCleanerBtn(clearBtn)
  }

  setToCookie('tasks', value)
}

export { removeItem }
