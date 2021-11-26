import { weatherWarnings } from '.'
import { WeatherWarning } from '../../interfaces/WeatherWarning'
import { fetchWeatherWarnings } from '../actions'

describe('weather-warning-reducer', () => {
  const defaultState = { warnings: [], loading: false, loaded: false }

  describe('weatherWarnings', () => {})
  it('sets loading to true when handling a fetch request', () => {
    // Arrange
    const state = { ...defaultState }
    const action = fetchWeatherWarnings.request()
    // Act
    const { loading } = weatherWarnings(state, action)
    // Assert
    expect(loading).toBe(true)
  })

  it('sets loading to false and loaded to true when handling a success request', () => {
    // Arrange
    const state = { ...defaultState }
    const successPayload: WeatherWarning[] = []
    const action = fetchWeatherWarnings.success(successPayload)
    // Act
    const { loading, loaded } = weatherWarnings(state, action)
    // Assert
    expect(loading).toBe(false)
    expect(loaded).toBe(true)
  })

  it('sets warnings on the state when handling success request', () => {
    // Arrange
    const state = {
      ...defaultState,
      warnings: [{ description: 'foo', effective: 'now' }],
    }
    const successPayload: WeatherWarning[] = [
      { description: 'bar', effective: 'tomorrow' },
    ]
    const action = fetchWeatherWarnings.success(successPayload)
    // Act
    const { warnings } = weatherWarnings(state, action)
    // Assert
    expect(warnings).toBe(successPayload)
  })
})
