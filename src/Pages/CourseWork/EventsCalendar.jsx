import React from 'react';

/* 3rd party library ---------------------------*/
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid'; // a plugin!


function renderFCEvent(eventInfo) {
	return (
		<div>
			<p><b>{eventInfo.event.extendedProps.time}</b></p>
			<p>{eventInfo.event.title}</p>
		</div>

	);
}

export default class EventsCalendar extends React.Component {

	render() {
		return (
			<FullCalendar
				plugins={[dayGridPlugin]}
				initialView="dayGridMonth"
				events={[
					{ title: 'Kitten Shower and Supply Drive', date: '2023-08-05', id: 'tooltip-id1', extendedProps: { time: '10 am' } },
					{ title: 'Paws and Paint: A Cat-Themed Art Workshop', date: '2023-08-18', id: 'tooltip-id2', extendedProps: { time: '3 pm' } },
					{ title: 'Meow & Mingle Adoption Event', date: '2023-09-06', id: 'tooltip-id3', extendedProps: { time: '11 am' } }
				]}
				height='auto'
				contentHeight='auto'
				defaultAllDay='true'
				eventMouseEnter={this.handleMouseEnter}
				eventContent={renderFCEvent}
			/>
		);
	}

};