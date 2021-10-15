import { WeatherWarningService } from './WeatherWarningService'

describe('WeatherWarningService', () => {
  it('returns warnings from the weather api', async () => {
    // Arrange
    const warning = {
      description: 'some warning description',
      effective: new Date(),
    }
    mockFetchReturnValue({ features: [warning] })
    const weatherWarningService = new WeatherWarningService()
    // Act
    const warnings = await weatherWarningService.getWeather()
    // Assert
    expect(warnings).toEqual([warning])
  })
})

function mockFetchReturnValue(value: any) {
  global.fetch = jest.fn().mockImplementation(() =>
    Promise.resolve({
      json: () => Promise.resolve(value),
    }),
  )
}
