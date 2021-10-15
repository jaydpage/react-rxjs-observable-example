import { weatherWarnings, WeatherWarningState } from './weather-warnings'

export interface AppState {
  weatherWarnings: WeatherWarningState
}

export const reducers = {
  weatherWarnings,
}
