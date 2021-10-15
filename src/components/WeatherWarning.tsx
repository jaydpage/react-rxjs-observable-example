import React from 'react'
import { WeatherWarningProps } from './WeatherWarningContainer'

export const WeatherWarning: React.FunctionComponent<WeatherWarningProps> = (
  props,
) => {
  if (!props.loading && !props.loaded) {
    props.loadWeatherWarnings()
  }
  if (!props.loaded) {
    setTimeout(() => {
      props.loadSuccess()
    }, 1000)
  }
  return <div>{JSON.stringify(props)}</div>
}
