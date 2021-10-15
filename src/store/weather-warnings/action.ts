import { createAsyncAction } from 'typesafe-actions'
import { WeatherWarning } from '../../interfaces/WeatherWarning'

export enum Actions {
  fetchWeatherWarnings = 'FETCH_WEATHER_WARNINGS',
  fetchWeatherWarningsSuccess = 'FETCH_WEATHER_WARNINGS_SUCCESS',
  fetchWeatherWarningsError = 'FETCH_WEATHER_WARNINGS_ERROR',
}

export const ActionCreators = {
  fetchWeatherWarnings: createAsyncAction(
    Actions.fetchWeatherWarnings,
    Actions.fetchWeatherWarningsSuccess,
    Actions.fetchWeatherWarningsError,
  )<void, WeatherWarning[], Error>(),
}

export type Action = typeof ActionCreators[keyof typeof ActionCreators]
