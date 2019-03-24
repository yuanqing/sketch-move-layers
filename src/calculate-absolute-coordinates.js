import { getAbsoluteCoordinates } from 'sketch-plugin-helper'

export function calculateAbsoluteCoordinates (layers) {
  return layers.map(function (layer) {
    return {
      ...getAbsoluteCoordinates(layer),
      layer
    }
  })
}
