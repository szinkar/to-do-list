const messageDefinition = (array, indicator) => {
  return array.filter( element => element.cause === indicator )
}

export {messageDefinition}