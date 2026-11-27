// Tokens de movimento centrais (skill motion-foundations).
// Componentes não devem usar durações, curvas ou springs inline: importe daqui.

export const motionTokens = {
  duration: { instant: 0.08, fast: 0.18, normal: 0.35, slow: 0.6, crawl: 1.0 },
  easing: {
    smooth: [0.22, 1, 0.36, 1],
    sharp: [0.4, 0, 0.2, 1],
  },
  distance: { xs: 4, sm: 8, md: 16, lg: 24 },
  scale: { press: 0.97 },
}

export const springs = {
  snappy: { type: 'spring', stiffness: 300, damping: 30 },
  gentle: { type: 'spring', stiffness: 120, damping: 20 },
}

// Com movimento reduzido: só fade de opacidade de no máximo 0,2 s, sem transform.
export const reducedTransition = { duration: 0.15 }
