import { getCookie } from './getCookie.js'

const checkCookie = ({ key }) => {
  const isCookieEmpty = getCookie(key)
  return isCookieEmpty ? JSON.parse(isCookieEmpty) : []
}

export {checkCookie}