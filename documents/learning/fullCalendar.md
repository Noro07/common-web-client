# fullcalendar

```JS
<FullCalendar
          header={{
            right:'prev,today,next'
          }}
          defaultView="timeGridDay"
          plugins={[timeGridPlugin]}
          eventClick={(info) => {
            this.setState({ data: info.event.title });
            this.childView.changeIsOpen();
            var eventObj = info.event;
            if (eventObj.url) {
                alert(
                  'Clicked ' + eventObj.title + '.\n' +
                  'Will open ' + eventObj.url + ' in a new tab'
                );
              window.open(eventObj.url);
              info.jsEvent.preventDefault(); // prevents browser from following link in current tab.
            } else {
                alert('Clicked ' + eventObj.title);
            }
          }}
          events={[
            {
              title: 'simple event',
              start: '2019-08-02'
            },
            {
              title: 'event with URL',
              url: 'https://www.google.com/',
              start: '2019-08-03'
            }
          ]}
        />
```

## defaultView

 view model `timeGridDay`: top menu => day,`timeGridWeek`: top menu => a week, `dayGridMonth` => a week

## plugins

 view left menu `[timeGridPlugin]`: left menu => 24h timeline,

## eventClick

click event

## events

data. url would create a link and click on it would cause the redirect. `url` is not good to use, suppose to open tab in `eventClick` instead of using this
