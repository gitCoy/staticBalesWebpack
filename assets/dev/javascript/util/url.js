/**
 * @param event
 * @return null
 */
const clearEvent = (e) => {
  if (e && e.stopPropagation) {
    e.stopPropagation()
  } else if (window.event) {
    window.event.cancelBubble = true
  }
}

export default {
  clearEvent
}