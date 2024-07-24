function convertTemperature() {
    const temperatureInput = document.getElementById('temperature').value;
    const unit = document.getElementById('unit').value;
    let result;
    
    if (isNaN(temperatureInput)) {
      document.getElementById('result').innerHTML = "Please enter a valid number.";
      return;
    }
    
    const temperature = parseFloat(temperatureInput);
    
    if (unit === 'celsius') {
      result = {
        fahrenheit: temperature * 9 / 5 + 32,
        kelvin: temperature + 273.15
      };
    } else if (unit === 'fahrenheit') {
      result = {
        celsius: (temperature - 32) * 5 / 9,
        kelvin: (temperature - 32) * 5 / 9 + 273.15
      };
    } else if (unit === 'kelvin') {
      result = {
        celsius: temperature - 273.15,
        fahrenheit: (temperature - 273.15) * 9 / 5 + 32
      };
    }
    
    document.getElementById('result').innerHTML = `
      Converted Temperature:<br>
      ${result.celsius ? result.celsius.toFixed(2) + ' °C' : ''}
      ${result.fahrenheit ? result.fahrenheit.toFixed(2) + ' °F' : ''}
      ${result.kelvin ? result.kelvin.toFixed(2) + ' K' : ''}
    `;
    
    updateNature(temperature);
  }

  function updateNature(temperature) {
    const sun = document.querySelector('.sun');
    const moon = document.querySelector('.moon');
    const cloud = document.querySelector('.cloud');
    const tree = document.querySelector('.tree');
    const bush = document.querySelector('.bush');

    sun.style.display = 'none';
    moon.style.display = 'none';
    cloud.style.display = 'none';
    tree.style.display = 'none';
    bush.style.display = 'none';

    if (temperature > 25) {
      sun.style.display = 'block';
      cloud.style.display = 'block';
    } else if (temperature < 0) {
      moon.style.display = 'block';
      cloud.style.display = 'block';
    } else {
      sun.style.display = 'block';
      tree.style.display = 'block';
      bush.style.display = 'block';
    }
  }