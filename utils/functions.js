const tryRound = (value) => {
    const rounded = Math.round(value * 1000) / 1000;
    return rounded.toString();
  }

  export const convertTemperature = (value, scale) => {

    const temperatures = {
      Celsius: '0',
      Fahrenheit: '0',
      Kelvin: '0',
      Reaumur: '0'
    };

    const temperature = parseFloat(value);
    if (Number.isNaN(temperature)) {
      return '';
    }

    switch (scale) {
      case 'C':
        temperatures.Celsius = tryRound(temperature);
        temperatures.Kelvin = tryRound(temperature + 273.16);
        temperatures.Fahrenheit = tryRound(5 / 9 * (temperature - 32));
        temperatures.Reaumur = tryRound(5 / 4 * temperature);
        return temperatures;
      case 'K':
        temperatures.Celsius = tryRound(temperature - 273.16);
        temperatures.Kelvin = temperature.toString();
        temperatures.Fahrenheit = tryRound(5 / 9 * (temperature - 32) - 273.16);
        temperatures.Reaumur = tryRound(5 / 4 * temperature - 273.16);
        return temperatures;
      case 'F':
        temperatures.Celsius = tryRound(9 / 5 * (temperature + 32));
        temperatures.Kelvin = tryRound(9 / 5 * (temperature + 32) + 273.16);
        temperatures.Fahrenheit = tryRound(temperature);
        temperatures.Reaumur = tryRound(9 / 4 * temperature + 32);
        return temperatures;
      case 'R':
        temperatures.Celsius = tryRound(4 / 5 * temperature);
        temperatures.Kelvin = tryRound(4 / 5 * temperature + 273.16);
        temperatures.Fahrenheit = tryRound(4 / 9 * (temperature - 32));
        temperatures.Reaumur = tryRound(temperature);
        return temperatures;
      default:
        return temperatures;
    }
  }
