import React, { Component } from 'react';

import clear from '../img/weather-icons/clear.svg';
import cloudy from '../img/weather-icons/cloudy.svg';
import drizzle from '../img/weather-icons/drizzle.svg';
import fog from '../img/weather-icons/fog.svg';
import mostlycloudy from '../img/weather-icons/mostlycloudy.svg';
import partlycloudy from '../img/weather-icons/partlycloudy.svg';
import rain from '../img/weather-icons/rain.svg';
import snow from '../img/weather-icons/snow.svg';
import storm from '../img/weather-icons/storm.svg';
import unknown from '../img/weather-icons/unknown.svg';

class WeatherForecast extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
        <div className="app_main">
        <div className="twentyfour_hours  md-col-7 ">
          <div>
            <div className="time">03:00</div>
            <div>
              <img
                src={partlycloudy}
                alt="partlycloudy"
                height="150"
                width="150"
                className="icon"
              />
            </div>
            <div className="degree">8°C</div>
          </div>

          <div>
            <div className="time">06:00</div>
            <div>
              <img
                src={partlycloudy}
                alt="partlycloudy"
                height="150"
                width="150"
                className="icon"
              />
            </div>
            <div className="degree">9°C</div>
          </div>

          <div>
            <div className="time">09:00</div>
            <div>
              <img
                src={clear}
                alt="clear"
                height="150"
                width="150"
                className="icon"
              />
            </div>
            <div className="degree">14°C</div>
          </div>

          <div>
            <div className="time">12:00</div>
            <div>
              <img
                src={clear}
                alt="clear"
                height="150"
                width="150"
                className="icon"
              />
            </div>
            <div className="degree">17°C</div>
          </div>

          <div>
            <div className="time">15:00</div>
            <div>
              <img
                src={clear}
                alt="clear"
                height="150"
                width="150"
                className="icon"
              />
            </div>
            <div className="degree">18°C</div>
          </div>

          <div>
            <div className="time">18:00</div>
            <div>
              <img
                src={clear}
                alt="clear"
                height="150"
                width="150"
                className="icon"
              />
            </div>
            <div className="degree">16°C</div>
          </div>

          <div>
            <div className="time">21:00</div>
            <div>
              <img
                src={partlycloudy}
                alt="partlycloudy"
                height="150"
                width="150"
                className="icon"
              />
            </div>
            <div className="degree">13°C</div>
          </div>
        </div>
      </div>
    );
  }
}

export default WeatherForecast;