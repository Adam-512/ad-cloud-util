/**
 * @param {number} timeout
 * @param {(event: Event) => void} callback
 * @return {(event: Event) => void}
 */
// eslint-disable-next-line no-unused-vars
function debounce(timeout, callback) {
  let timeoutID = 0
  return (event) => {
    clearTimeout(timeoutID)
    timeoutID = setTimeout(() => callback(event), timeout)
  }
}
