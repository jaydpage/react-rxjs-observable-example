import React, { useEffect } from 'react'
import { WeatherWarningProps } from './WeatherWarningContainer'
import './WeatherWarning.css'

export const WeatherWarning: React.FunctionComponent<WeatherWarningProps> = (
  props,
) => {
  useEffect(() => {
    props.loadWeatherWarnings()
  })

  return (
    <div>
      {props.warnings.map((warning) => (
        <div className="weather-warning">
          <h3>Effective</h3>
          <div>{warning.effective}</div>
          <h3>Description</h3>
          <div>{warning.description}</div>
        </div>
      ))}
    </div>
  )
}
