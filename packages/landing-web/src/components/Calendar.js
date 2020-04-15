import React from 'react';
import FullCalendar from '@fullcalendar/react';
// import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import Tooltip from 'tooltip.js';
import moment from 'moment';

const Calendar = () => (
  <div className="calendar">
    <FullCalendar
      header={{
        right: 'today,prev,next'
      }}
      allDaySlot={{
        allDaySlot: false
      }}
      // defaultView="dayGridMonth"
      // plugins={[dayGridPlugin]}
      defaultView="timeGridWeek"
      plugins={[timeGridPlugin]}
      eventRender={(info) => {
        // eslint-disable-next-line no-unused-vars
        const tooltip = new Tooltip(info.el, {
          title: info.event.title,
          placement: 'top',
          trigger: 'hover',
          container: 'body'
        });
      }}
      eventClick={(info) => {
        var eventObj = info.event;
        if (eventObj.url) {
          alert(
            'Clicked ' +
              eventObj.title +
              '.\n' +
              'Will open ' +
              eventObj.url +
              ' in a new tab'
          );
          window.open(eventObj.url);
          info.jsEvent.preventDefault(); // prevents browser from following link in current tab.
        } else {
          alert('Clicked ' + eventObj.title);
        }
      }}
      events={[
        {
          title: 'simple event today',
          start: moment().format('YYYY-MM-DD')
        },
        {
          title: 'event with URL tomorrow',
          url: 'https://www.baidu.com/',
          start: moment()
            .add(1, 'days')
            .format('YYYY-MM-DD'),
          end: moment()
            .add(120, 'minute')
            .format('YYYY-MM-DD')
        },
        {
          title: 'event with URL yesterday',
          url: 'https://www.google.com/',
          start: moment().format('YYYY-MM-DD'),
          end: moment()
            .add(120, 'minute')
            .format('YYYY-MM-DD')
        }
      ]}
    />
  </div>
);

export default Calendar;
