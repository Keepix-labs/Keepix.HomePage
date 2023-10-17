const qs = (selector, parent = document) => {
  return parent.querySelector(selector)
}

const qst = (selector, parent = document) => {
  return parent.getElementsByTagName(selector)
}

const qsa = (selector, parent = document) => {
  return parent.querySelectorAll(selector)
}

const testHttp = url => {
  return url.includes('http')
}

export {
  qs,
  qst,
  qsa,
  testHttp
}