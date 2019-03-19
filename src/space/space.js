const {
  getSelectedLayers,
  openUserInputDialog,
  saveUserInput,
  showErrorMessage,
  showSuccessMessage,
  TEXT_BOX
} = require('sketch-plugin-helper')

function space ({userInputDialogTitle, sort, spaceLayers, successMessage}) {
  return function() {
    const selectedLayers = getSelectedLayers()
    if (selectedLayers.length < 2) {
      showErrorMessage('Select at least two layers')
      return
    }
    const userInput = openUserInputDialog({
      title: userInputDialogTitle,
      inputs: [
        {
          key: 'space',
          label: 'Space',
          type: TEXT_BOX
        }
      ]
    })
    if (!userInput) {
      return
    }
    saveUserInput(userInput)
    const space = parseFloat(userInput.space)
    const layers = [].concat(selectedLayers).sort(sort)
    spaceLayers({layers, space})
    showSuccessMessage(successMessage)
  }
}

module.exports = space
