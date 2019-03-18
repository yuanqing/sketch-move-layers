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
  selectedLayers.forEach(function (layer) {
    layer.frame.x += horizontal
    layer.frame.y += vertical
  })
  const length = selectedLayers.length
  showSuccessMessage(`Moved ${length} ${length == 1 ? 'layer' : 'layers'}`)
}

module.exports = moveSelectedLayers
