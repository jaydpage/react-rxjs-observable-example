import { WeatherWarning } from '../interfaces/WeatherWarning'

export class WeatherWarningService {
  async getWeather(): Promise<WeatherWarning[]> {
    const result = await fetch('https://api.weather.gov/alerts/active?area=FL')
    const warnings = await result.json()
    return this.mapToWeatherWarnings(warnings)
  }

  private mapToWeatherWarnings(result: any): WeatherWarning[] {
    return result.features.map(
      ({ properties: { description, effective } }: any) => {
        return {
          description,
          effective,
        }
      },
    )
  }
}
