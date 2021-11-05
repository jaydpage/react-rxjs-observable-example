### TODO

- Set up a react project with redux and redux observable.
- Create service that calls a weather api. For example https://api.weather.gov/alerts/active?area=FL
- Create a component that can display some of the weather data when the page loads
- Using redux and store state show a spinner while the weather data is loading
- Use a redux observable epic to retrieve the the weather data and store the weather data in the application state.
- Display the weather data on the component using the application state.

### Bonus points

- Show a message on screen when the call to the weather api fails
- Add the ability to show multiple weather componets, each showing weather from a different area

### UI Testing

https://enzymejs.github.io/enzyme/docs/api/

- Validate static text on a component
- Validate dynamic text on a component based on props
- Validate a element/component is shown conditionally based on props
- Click a button and validate expected outcome
- Write a snapshot test to validate the display of a component and its children given specific props
