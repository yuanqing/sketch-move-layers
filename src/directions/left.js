export const label = 'Left'

export function sortLayers (layerX, layerY) {
  return (
    layerY.frame.x + layerY.frame.width - (layerX.frame.x + layerX.frame.width)
  )
}

export function spaceLayers ({ layers, space }) {
  let x = null
  layers.forEach(function (layer) {
    if (x == null) {
      x = layer.frame.x
      return
    }
    x = x - space - layer.frame.width
    layer.frame.x = x
  })
}
