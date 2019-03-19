const {
  getSelectedLayers,
  openUserInputDialog,
  saveUserInput,
  showErrorMessage,
  showSuccessMessage,
  TEXT_BOX
} = require('sketch-plugin-helper')

function offsetSelectedLayers () {
  const selectedLayers = getSelectedLayers()
  if (selectedLayers.length == 0) {
    showErrorMessage('Select at least one layer')
    return
  }
  const userInput = openUserInputDialog({
    title: 'offset Selected Layers',
    inputs: [
      {
        key: 'offsetSelectedLayers.horizontal',
        label: '→ Horizontal',
        type: TEXT_BOX
      },
      {
        key: 'offsetSelectedLayers.vertical',
        label: '↓ Vertical',
        type: TEXT_BOX
      }
    ]
  })
  if (!userInput) {
    return
  }
  saveUserInput(userInput)
  const horizontal = parseFloat(userInput['offsetSelectedLayers.horizontal'])
  const vertical = parseFloat(userInput['offsetSelectedLayers.vertical'])
  if (horizontal == 0 && vertical == 0) {
    return
  }
  selectedLayers.forEach(function (layer) {
    layer.frame.x += horizontal
    layer.frame.y += vertical
  })
  const length = selectedLayers.length
  const h = prependDirection({
    offset: horizontal,
    positiveSymbol: '→',
    negativeSymbol: '←'
  })
  const v = prependDirection({
    offset: vertical,
    positiveSymbol: '↓',
    negativeSymbol: '↑'
  })
  showSuccessMessage(`offsetd ${length == 1 ? 'layer' : 'layers'}${h}${v}`)
}

function prependDirection ({ offset, positiveSymbol, negativeSymbol }) {
  if (offset > 0) {
    return ` ${positiveSymbol} ${offset}`
  }
  if (offset < 0) {
    return ` ${negativeSymbol} ${offset * -1}`
  }
  return ''
}

module.exports = offsetSelectedLayers
