
const removeElementOfArray = (value, removableElement) => {
    const currentId = Number(removableElement.id)
    const indexOfTasks = value.findIndex(task => task.id === currentId)
    value.splice(indexOfTasks, 1)
}

export {removeElementOfArray}