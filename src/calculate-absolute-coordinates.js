import { calculateCoordinatesRelativeToPage } from 'sketch-plugin-helper'

export function calculateAbsoluteCoordinates (layers) {
  return layers.map(function (layer) {
    return {
      ...calculateCoordinatesRelativeToPage(layer),
      layer
    }
  })
}
