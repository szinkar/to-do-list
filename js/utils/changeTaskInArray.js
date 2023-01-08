const changeTaskInArray = (value, mutableElement, input) => {
  const idCurrentElement = Number(mutableElement.id)
  const indexOfTasks = value.findIndex((task) => task.id === idCurrentElement)
  value[indexOfTasks].text = input.value
}

export { changeTaskInArray }
