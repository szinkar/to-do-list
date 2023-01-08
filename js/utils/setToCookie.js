const setToCookie = (key, value) =>
  (document.cookie = `${key}=${JSON.stringify(value)}; expires=Tue, 19 Jan 2038 03:14:07 GMT`)

export { setToCookie }
