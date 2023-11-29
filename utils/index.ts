/**
 * Selects and returns the first element matching the selector within the given context.
 *
 * @param {string} selector - The CSS selector used to select the element.
 * @param {Document | Element} [parent=document] - The context in which to perform the search (default is the document).
 * @returns {Element | null} - The first element matching the selector, or null if none is found.
 */
const qs = (selector: string, parent: Document | Element = document): Element | null => {
  return parent.querySelector(selector)
}

/**
 * Selects and returns a list of elements matching the tag name within the given context.
 *
 * @param {string} selector - The HTML tag name used to select the elements.
 * @param {Document | Element} [parent=document] - The context in which to perform the search (default is the document).
 * @returns {HTMLCollectionOf<Element>} - A list of elements matching the tag name.
 */
const qst = (selector: string, parent: Document | Element = document): HTMLCollectionOf<Element> => {
  return parent.getElementsByTagName(selector)
}

/**
 * Selects and returns a list of elements matching the selector within the given context.
 *
 * @param {string} selector - The CSS selector used to select the elements.
 * @param {Document | Element} [parent=document] - The context in which to perform the search (default is the document).
 * @returns {NodeListOf<Element>} - A list of elements matching the selector.
 */
const qsa = (selector: string, parent: Document | Element = document): NodeListOf<Element> => {
  return parent.querySelectorAll(selector)
}

/**
 * Checks if the specified URL contains the HTTP protocol.
 *
 * @param {string} url - The URL to test.
 * @returns {boolean} - true if the URL contains 'http', otherwise false.
 */
const testHttp = (url: string): boolean => {
  return url.includes('http')
}

export {
  qs,
  qst,
  qsa,
  testHttp
}
