export const label = 'Down'

export function sortLayers (layerX, layerY) {
  return layerX.frame.y - layerY.frame.y
}

export function spaceLayers ({ layers, space }) {
  let y = null
  layers.forEach(function (layer) {
    if (y == null) {
      y = layer.frame.y + layer.frame.height + space
      return
    }
    layer.frame.y = y
    y = y + layer.frame.height + space
  })
}
