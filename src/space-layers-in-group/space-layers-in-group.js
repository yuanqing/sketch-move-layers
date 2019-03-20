import {
  adjustParentGroupsToFit,
  getAllLayers,
  iterateNestedLayers,
  openUserInputDialog,
  saveUserInput,
  showErrorMessage,
  showSuccessMessage,
  CHECK_BOX,
  TEXT_BOX
} from 'sketch-plugin-helper'

import * as directions from '../directions/directions'

export default function spaceLayersInGroup (direction) {
  const { sortLayers, spaceLayers, label } = directions[direction]
  return function () {
    const userInput = openUserInputDialog({
      title: `Space Layers in Group ${label}`,
      inputs: [
        {
          key: 'spaceLayersInGroup.groupName',
          label: 'Group name',
          type: TEXT_BOX
        },
        {
          key: 'spaceLayersInGroup.exactMatch',
          label: 'Exact match',
          type: CHECK_BOX
        },
        {
          key: 'spaceLayersInGroup.space',
          label: 'Space',
          type: TEXT_BOX
        }
      ]
    })
    if (!userInput) {
      return
    }
    saveUserInput(userInput)
    const space = parseFloat(userInput['spaceLayersInGroup.space'])
    const groupName = userInput['spaceLayersInGroup.groupName']
    const regularExpression = new RegExp(
      userInput['spaceLayersInGroup.exactMatch'] ? `^${groupName}$` : groupName
    )
    const groups = getGroupsByRegularExpression(regularExpression)
    if (groups.length == 0) {
      showErrorMessage(`No groups found`)
      return
    }
    groups.forEach(function (group) {
      const layers = [].concat(group.layers).sort(sortLayers)
      spaceLayers({ layers, space })
      group.adjustToFit()
      adjustParentGroupsToFit(group)
    })
    showSuccessMessage(`Spaced layers in group ${direction}`)
  }
}

function getGroupsByRegularExpression (regularExpression) {
  const result = []
  iterateNestedLayers(getAllLayers(), function (layer) {
    if (layer.type == 'Group' && regularExpression.test(layer.name)) {
      result.push(layer)
    }
  })
  return result
}
