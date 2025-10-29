

const WeatherDisplay = ({ weather }) => {
  // Step 2: Conditional inline styling
  const tempColor = weather.temperature > 20 ? "red" : "blue";

  return (
    <div>
      {/* p tag for temperature */}
      <p>
        Temperature: <span style={{ color: tempColor }}>{weather.temperature}</span>
      </p>

      {/* p tag for conditions */}
      <p>Conditions: {weather.conditions}</p>
    </div>
  );
};

export default WeatherDisplay;

