import { getType } from 'typesafe-actions'
import { WeatherWarning } from '../../interfaces/WeatherWarning'
import { fetchWeatherWarnings } from '../actions'

export interface WeatherWarningState {
  warnings: WeatherWarning[]
  loading: boolean
  loaded: boolean
}

const initialState: WeatherWarningState = {
  warnings: [],
  loading: false,
  loaded: false,
}

export function weatherWarnings(
  state: WeatherWarningState = initialState,
  action: { type: any; payload: any },
): WeatherWarningState {
  switch (action.type) {
    case getType(fetchWeatherWarnings.request):
      return {
        ...state,
        loading: true,
      }
    case getType(fetchWeatherWarnings.success):
      console.log('action.payload', action.payload)
      return {
        ...state,
        warnings: action.payload,
        loading: false,
        loaded: true,
      }
    default:
      return state
  }
}
