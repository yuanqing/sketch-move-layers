const space = require('./space')

module.exports = space({
  userInputDialogTitle: 'Space Selection Left',
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
