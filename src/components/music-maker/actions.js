export const PLAY_WITH_RNN = "PLAY_WITH_RNN"
export const PLAY_WITH_VAE = "PLAY_WITH_VAE"

export const playWithRNN = tune => ({
  type: PLAY_WITH_RNN,
    tune
})

export const playWithVae = sampleCount => ({
    type: PLAY_WITH_VAE,
    sampleCount
})