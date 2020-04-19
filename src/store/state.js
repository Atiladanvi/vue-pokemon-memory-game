import { isMobile } from '../support/utils'

export default {
  level: 7,
  score: 0,
  timer: 0,
  failures: 0,
  shuffleCount: 0,
  error: '',
  isRunning: false,
  isEasyMode: false,
  isRouletteMode: false,
  isLoading: false,
  isMobile: isMobile(),
  found: [],
  isInitedinitiated: false,
  selecteds: [],
  pokemonRawList: [],
  readingInformations: false
}
