import {
  adjustParentGroupsToFit,
  getLayersOnCurrentPage,
  iterateChildLayers,
  openSettingsDialog,
  saveTemporarySettings,
  showErrorMessage,
  showSuccessMessage,
  CHECK_BOX,
  NUMERIC_TEXT_BOX,
  TEXT_BOX
} from 'sketch-plugin-helper'

import directions from '../directions/directions'
import { calculateAbsoluteCoordinates } from '../calculate-absolute-coordinates'

export default function spaceLayersInGroup (direction) {
  const { sortLayers, spaceLayers, label } = directions[direction]
  return function () {
    const settings = openSettingsDialog({
      title: `Space Layers in Group ${label}`,
      inputs: [
        {
          type: TEXT_BOX,
          key: 'spaceLayersInGroup.groupName',
          label: 'Group name'
        },
        {
          type: CHECK_BOX,
          key: 'spaceLayersInGroup.exactMatch',
          label: 'Exact match'
        },
        {
          type: NUMERIC_TEXT_BOX,
          key: 'spaceLayersInGroup.space',
          label: 'Space'
        }
      ]
    })
    if (!settings) {
      return
    }
    saveTemporarySettings(settings)
    const { space, groupName, exactMatch } = settings.spaceLayersInGroup
    const regularExpression = new RegExp(
      exactMatch ? `^${groupName}$` : groupName
    )
    const groups = getGroupsByRegularExpression(regularExpression)
    if (groups.length === 0) {
      showErrorMessage('No groups found')
      return
    }
    groups.forEach(function (group) {
      spaceLayers({
        layers: calculateAbsoluteCoordinates(group.layers).sort(sortLayers),
        space
      })
      group.adjustToFit()
    })
    groups.forEach(adjustParentGroupsToFit)
    showSuccessMessage(`Spaced layers in group ${direction}`)
  }
}

function getGroupsByRegularExpression (regularExpression) {
  const result = []
  iterateChildLayers(getLayersOnCurrentPage(), function (layer) {
    if (layer.type === 'Group' && regularExpression.test(layer.name)) {
      result.push(layer)
    }
  })
  return result
}
