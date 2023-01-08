const checkTextBtn = (value, input) => {
  const isValuesEmpty = value.length === 0
  isValuesEmpty ? (input.nextElementSibling.innerHTML = 'Submit') : (input.nextElementSibling.innerHTML = 'Submit')
}

export { checkTextBtn }
