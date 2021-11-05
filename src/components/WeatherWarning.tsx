import React from 'react'
import { WeatherWarningProps } from './WeatherWarningContainer'

export const WeatherWarning: React.FunctionComponent<WeatherWarningProps> = (
  props,
) => {
  if (!props.loading && !props.loaded) {
    props.loadWeatherWarnings()
  }
  return <div>{JSON.stringify(props)}</div>
}
