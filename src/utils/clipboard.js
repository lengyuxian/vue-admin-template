// import Vue from 'vue'
import Clipboard from 'clipboard'

// function clipboardSuccess() {
//   Vue.prototype.$message({
//     message: 'Copy successfully',
//     type: 'success',
//     duration: 1500
//   })
// }

// function clipboardError() {
//   Vue.prototype.$message({
//     message: 'Copy failed',
//     type: 'error'
//   })
// }

export default function handleClipboard(text, event) {
  console.log(1)
  return new Promise((resolve, reject) => {
    const clipboard = new Clipboard(event.target, {
      text: () => text
    })
    console.log(2)
    clipboard.onClick(event)
    clipboard.on('success', () => {
      // clipboardSuccess()
      clipboard.off('error')
      clipboard.off('success')
      clipboard.destroy()
      resolve()
    })
    clipboard.on('error', () => {
      // clipboardError()
      clipboard.off('error')
      clipboard.off('success')
      clipboard.destroy()
      reject()
    })
  })
}
