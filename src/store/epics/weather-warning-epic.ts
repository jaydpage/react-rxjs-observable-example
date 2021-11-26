import { filter, map, switchMap } from 'rxjs'
import { isActionOf } from 'typesafe-actions'
import { WeatherWarning } from '../../interfaces/WeatherWarning'
import { WeatherWarningService } from '../../services'
import { fetchWeatherWarnings } from '../actions'
import { RootEpic } from '../root-epic'

export const fetchWeatherWarnings$: RootEpic = (action$: any, state$: any) => {
  return action$.pipe(
    filter(isActionOf(fetchWeatherWarnings.request)),
    switchMap(() => new WeatherWarningService().getWeather()),
    map((value: WeatherWarning[]) => fetchWeatherWarnings.success(value)),
  )
}
