import { getAbsoluteCoordinates } from 'sketch-plugin-helper'

export default function calculateAbsoluteCoordinates (layers) {
  return layers.map(function (layer) {
    return {
      ...getAbsoluteCoordinates(layer),
      layer
    }
  })
}
