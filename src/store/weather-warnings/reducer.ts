import { getType } from 'typesafe-actions'
import { ActionCreators } from '.'

export interface WeatherWarningState {}

const initialState: WeatherWarningState = {}

export function weatherWarnings(
  state: WeatherWarningState = initialState,
  action: any,
): WeatherWarningState {
  switch (action.type) {
    case getType(ActionCreators.fetchWeatherWarnings.request):
    default:
      return state
  }
}
