// feature support list, overriden per environment, capacitor

export const SUPPORTS = {
  offscreenRender: false,
  update: false,
  angle: false,
  doh: false,
  dht: true,
  discord: false,
  torrentPort: true,
  torrentPath: false,
  torrentPersist: false,
  keybinds: false,
  isAndroid: true,
  externalPlayer: false,
  permamentNAT: false // no way of safely closing app
}
