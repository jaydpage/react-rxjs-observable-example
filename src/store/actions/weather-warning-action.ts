import { createAsyncAction } from 'typesafe-actions'
import { WeatherWarning } from '../../interfaces/WeatherWarning'

export enum Actions {
  fetchWeatherWarnings = 'FETCH_WEATHER_WARNINGS',
  fetchWeatherWarningsSuccess = 'FETCH_WEATHER_WARNINGS_SUCCESS',
  fetchWeatherWarningsError = 'FETCH_WEATHER_WARNINGS_ERROR',
}

export const fetchWeatherWarnings = createAsyncAction(
  Actions.fetchWeatherWarnings,
  Actions.fetchWeatherWarningsSuccess,
  Actions.fetchWeatherWarningsError,
)<void, WeatherWarning[], Error>()
