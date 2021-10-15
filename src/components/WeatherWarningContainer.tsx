import { connect } from 'react-redux'
import { AppState } from '../store/reducers'
import { ActionCreators as WeatherWarningActionCreators } from '../store/weather-warnings'
import { WeatherWarning } from './WeatherWarning'

const mapStateToProps = (state: AppState) => ({
  ...state.weatherWarnings,
})

const mapDispatchToProps = (dispatch: any) => {
  return {
    loadWeatherWarnings: () => {
      dispatch(WeatherWarningActionCreators.fetchWeatherWarnings.request())
    },
  }
}

export type WeatherWarningProps = ReturnType<typeof mapStateToProps> &
  ReturnType<typeof mapDispatchToProps>

export const WeatherWarningContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(WeatherWarning)
