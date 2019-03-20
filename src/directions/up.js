export const label = 'Up'

export function sortLayers (layerX, layerY) {
  return (
    layerY.frame.y +
    layerY.frame.height -
    (layerX.frame.y + layerX.frame.height)
  )
}

export function spaceLayers ({ layers, space }) {
  let y = null
  layers.forEach(function (layer) {
    if (y == null) {
      y = layer.frame.y
      return
    }
    y = y - space - layer.frame.height
    layer.frame.y = y
  })
}
