const space = require('./space')

module.exports = space({
  userInputDialogTitle: 'Space Selection Right',
  successMessage: 'Spaced layers right',
  sort: function (layerX, layerY) {
    return layerX.frame.x - layerY.frame.x
  },
  spaceLayers: function ({ layers, space }) {
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
})
