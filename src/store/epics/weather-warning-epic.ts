import { filter, map, of, switchMap } from 'rxjs'
import { isActionOf } from 'typesafe-actions'
import { WeatherWarning } from '../../interfaces/WeatherWarning'
import { fetchWeatherWarnings } from '../actions'
import { RootEpic } from '../root-epic'

export const fetchWeatherWarnings$: RootEpic = (
  action$: any,
  _,
  state$: any,
) => {
  console.log('fetch weather warnings')
  return action$.pipe(
    filter(isActionOf(fetchWeatherWarnings.request)),
    switchMap(() => {
      return of([
        {
          description: 'some weather warning description!',
          effective: new Date().toDateString(),
        },
      ])
    }),
    map((value: WeatherWarning[]) => fetchWeatherWarnings.success(value)),
  )
}
