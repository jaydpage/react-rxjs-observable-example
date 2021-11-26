import { ActionsObservable } from 'redux-observable'
import { lastValueFrom, of, toArray } from 'rxjs'
import { fetchWeatherWarnings$ } from '.'
import { WeatherWarningService } from '../../services'
import { createTypedMockClass } from '../../test'
import * as actions from '../actions'
import { fetchWeatherWarnings } from '../actions/weather-warning-action'

jest.mock('../../services')

describe('weather-warning-epic', () => {
  it('fetchWeatherWarnings$', async () => {
    // Arrange
    const fetchWeatherWarningsSpy = jest.spyOn(
      actions.fetchWeatherWarnings,
      'success',
    )
    const warning = {
      properties: {
        description: 'some warning description',
        effective: new Date(),
      },
    }
    const fakeWeatherWarningService = {
      getWeather: jest.fn().mockResolvedValue(warning),
    }
    createTypedMockClass(WeatherWarningService).mockImplementation(
      () => fakeWeatherWarningService,
    )
    const action = ActionsObservable.from([fetchWeatherWarnings.request()])
    const state = of({}) as any
    // Act
    const epic$ = fetchWeatherWarnings$(action, state, [])
    await lastValueFrom(epic$.pipe(toArray()))
    // Assert
    expect(fetchWeatherWarningsSpy).toHaveBeenCalledWith(warning)
  })
})
