import { getType } from 'typesafe-actions'
import { ActionCreators } from '.'
import { WeatherWarning } from '../../interfaces/WeatherWarning'

export interface WeatherWarningState {
  warnings: WeatherWarning[]
  loading: boolean
}

const initialState: WeatherWarningState = { warnings: [], loading: false }

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
        warnings: [
          {
            description: 'some weather warning description!',
            effective: new Date().toDateString(),
          },
        ],
        loading: false,
      }
    default:
      return state
  }
}
