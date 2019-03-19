const spaceOutSelectedLayers = require('./space-out-selected-layers')

module.exports = spaceOutSelectedLayers({
  userInputDialogTitle: 'Space Selected Layers Down',
  successMessage: 'Spaced layers down',
  sort: function (layerX, layerY) {
    return layerX.frame.y - layerY.frame.y
  },
  spaceLayers: function ({ layers, space }) {
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
})
