import { addCleanerBtn } from './addCleanerBtn.js'
import { removeCleanerBtn } from './removeCleanerBtn.js'

const outputButton = (clearBtn, value) => {
  const isValuesEmpty = value.length === 0
  isValuesEmpty ? removeCleanerBtn(clearBtn) : addCleanerBtn(clearBtn)
}

export { outputButton }
