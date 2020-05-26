import React from 'react';
import _ from 'lodash';
import '../../css/Tickets.css';
import { convertDuration, convertFligthTime } from '../utils/convertTime';

const TicketsInfo = (props) => {

  const { segments } = props;

  return (
    <div className='results__flight-details'>
      {
        segments.map(({
          origin,
          destination,
          date,
          stops,
          duration,
        }) => (
          <ul className="results__list" key={origin}>
            <li className="results__item" >
              <span className='results__item--transparent'>
                {`${origin}-${destination}`}
              <br />
              </span>
              {convertFligthTime(date, duration)}
            </li>
            <li className="results__item">
              <span className='results__item--transparent'>
                В пути
              <br />
              </span>
              {convertDuration(duration)}
            </li>
            <li className="results__item">
              <span className='results__item--transparent'>
                {stops.length ? stops.length : '--'}
              <br />
              </span>
              {stops.join(', ')}
            </li>
          </ul>
        ))
      }
    </div>
  );
};

export default TicketsInfo;
