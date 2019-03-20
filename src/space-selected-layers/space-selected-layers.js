import {
  adjustParentGroupsToFit,
  getSelectedLayers,
  openUserInputDialog,
  saveUserInput,
  showErrorMessage,
  showSuccessMessage,
  TEXT_BOX
} from 'sketch-plugin-helper'

import * as directions from '../directions/directions'

export default function spaceSelectedLayers (direction) {
  const { sortLayers, spaceLayers, label } = directions[direction]
  return function () {
    const selectedLayers = getSelectedLayers()
    if (selectedLayers.length < 2) {
      showErrorMessage('Select at least two layers')
      return
    }
    const userInput = openUserInputDialog({
      title: `Space Selected Layers ${label}`,
      inputs: [
        {
          key: 'spaceSelectedLayers.space',
          label: 'Space',
          type: TEXT_BOX
        }
      ]
    })
    if (!userInput) {
      return
    }
    saveUserInput(userInput)
    const space = parseFloat(userInput['spaceSelectedLayers.space'])
    const layers = selectedLayers.sort(sortLayers)
    spaceLayers({ layers, space })
    layers.forEach(function (layer) {
      adjustParentGroupsToFit(layer)
    })
    showSuccessMessage(`Spaced selected layers ${direction}`)
  }
}
