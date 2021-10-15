import { getType } from 'typesafe-actions'
import { ActionCreators } from '.'
import { WeatherWarning } from '../../interfaces/WeatherWarning'

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
  action: any,
): WeatherWarningState {
  switch (action.type) {
    case getType(ActionCreators.fetchWeatherWarnings.request):
      return {
        ...state,
        loading: true,
      }
    case getType(ActionCreators.fetchWeatherWarnings.success):
      return {
        ...state,
        warnings: [...action.payload],
        loading: false,
        loaded: true,
      }
    default:
      return state
  }
}
