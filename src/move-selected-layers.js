const {
  getSelectedLayers,
  openUserInputDialog,
  saveUserInput,
  showErrorMessage,
  showSuccessMessage,
  TEXT_BOX
} = require('sketch-plugin-helper')

function moveSelectedLayers () {
  const selectedLayers = getSelectedLayers()
  if (selectedLayers.length == 0) {
    showErrorMessage('Select at least one layer')
    return
  }
  const userInput = openUserInputDialog({
    title: 'Move Selected Layers',
    inputs: [
      {
        key: 'moveSelectedLayers.horizontal',
        label: '→ Horizontal',
        type: TEXT_BOX
      },
      {
        key: 'moveSelectedLayers.vertical',
        label: '↓ Vertical',
        type: TEXT_BOX
      }
    ]
  })
  if (!userInput) {
    return
  }
  saveUserInput(userInput)
  const horizontal = parseFloat(userInput['moveSelectedLayers.horizontal'])
  const vertical = parseFloat(userInput['moveSelectedLayers.vertical'])
  if (horizontal == 0 && vertical == 0) {
    return
  }
  selectedLayers.forEach(function (layer) {
    layer.frame.x += horizontal
    layer.frame.y += vertical
  })
  const length = selectedLayers.length
  const h = addDirectionToOffset({
    offset: horizontal,
    positiveSymbol: '→',
    negativeSymbol: '←'
  })
  const v = addDirectionToOffset({
    offset: vertical,
    positiveSymbol: '↓',
    negativeSymbol: '↑'
  })
  showSuccessMessage(`Moved ${length == 1 ? 'layer' : 'layers'}${h}${v}`)
}

function addDirectionToOffset ({offset, positiveSymbol, negativeSymbol}) {
  if (offset > 0) {
    return ` ${positiveSymbol} ${offset}`
  }
  if (offset < 0) {
    return ` ${negativeSymbol} ${offset * -1}`
  }
  return ''
}

module.exports = moveSelectedLayers
