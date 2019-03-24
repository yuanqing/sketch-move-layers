import {
  adjustParentGroupsToFit,
  getSelectedLayers,
  openSettingsDialog,
  saveTemporarySettings,
  showErrorMessage,
  showSuccessMessage,
  NUMERIC_TEXT_BOX
} from 'sketch-plugin-helper'

import directions from '../directions/directions'
import { calculateAbsoluteCoordinates } from '../calculate-absolute-coordinates'

export default function spaceSelectedLayers (direction) {
  const { sortLayers, spaceLayers, label } = directions[direction]
  return function () {
    const selectedLayers = getSelectedLayers()
    if (selectedLayers.length < 2) {
      showErrorMessage('Select at least 2 layers')
      return
    }
    const settings = openSettingsDialog({
      title: `Space Selected Layers ${label}`,
      inputs: [
        {
          type: NUMERIC_TEXT_BOX,
          key: 'spaceSelectedLayers.space',
          label: 'Space'
        }
      ]
    })
    if (!settings) {
      return
    }
    saveTemporarySettings(settings)
    spaceLayers({
      layers: calculateAbsoluteCoordinates(selectedLayers).sort(sortLayers),
      space: settings['spaceSelectedLayers.space']
    })
    selectedLayers.forEach(adjustParentGroupsToFit)
    showSuccessMessage(`Spaced selected layers ${direction}`)
  }
}
