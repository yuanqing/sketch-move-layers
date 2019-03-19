const spaceOutSelectedLayers = require('./space-out-selected-layers')

module.exports = spaceOutSelectedLayers({
  userInputDialogTitle: 'Space Selected Layers Left',
  successMessage: 'Spaced layers left',
  sort: function (layerX, layerY) {
    return (
      layerY.frame.x +
      layerY.frame.width -
      (layerX.frame.x + layerX.frame.width)
    )
  },
  spaceLayers: function ({ layers, space }) {
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
})
