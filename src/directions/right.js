export const label = 'Right'

export function sortLayers (layerX, layerY) {
  return layerX.frame.x - layerY.frame.x
}

export function spaceLayers ({ layers, space }) {
  let x = null
  layers.forEach(function (layer) {
    if (x == null) {
      x = layer.frame.x + layer.frame.width + space
      return
    }
    layer.frame.x = x
    x = x + layer.frame.width + space
  })
}
