const spaceOutSelectedLayers = require('./space-out-selected-layers')

module.exports = spaceOutSelectedLayers({
  userInputDialogTitle: 'Space Selected Layers Up',
  successMessage: 'Spaced layers up',
  sort: function (layerX, layerY) {
    return (
      layerY.frame.y +
      layerY.frame.height -
      (layerX.frame.y + layerX.frame.height)
    )
  },
  spaceLayers: function ({ layers, space }) {
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
})
