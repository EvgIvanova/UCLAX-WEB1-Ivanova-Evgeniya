import styled from 'styled-components';

/* Component ---------------------------*/
import Inset from '@/Common/PagesLayout/Inset';
import EventsCalendar from './EventsCalendar';


const CourseWorkLayout = () => {
	return (
		<CourseWorkLayoutStyled className='CourseWorkLayout'>
			<Inset>
				<h1 id="headerevent">Events</h1>
				<EventsCalendar />

			</Inset>
		</CourseWorkLayoutStyled>
	);
};

export default CourseWorkLayout;

const CourseWorkLayoutStyled = styled.main`
	h1 {
		margin-bottom: 30px;
	}

	/* .Inset {
		height: 900px;
	} */


`;