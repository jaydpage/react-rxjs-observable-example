import { connect } from 'react-redux'
import { fetchWeatherWarnings } from '../store/actions'
import { RootState } from '../store/root-reducer'
import { WeatherWarning } from './WeatherWarning'

const mapStateToProps = (state: RootState) => ({
  ...state.weatherWarnings,
})

const mapDispatchToProps = (dispatch: any) => {
  return {
    loadWeatherWarnings: () => {
      dispatch(fetchWeatherWarnings.request())
    },
  }
}

export type WeatherWarningProps = ReturnType<typeof mapStateToProps> &
  ReturnType<typeof mapDispatchToProps>

export const WeatherWarningContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(WeatherWarning)
