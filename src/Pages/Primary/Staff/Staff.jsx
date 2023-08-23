import styled from 'styled-components';

/* Components ---------------------------*/
import StaffList from './StaffList';
import Inset from '@/Common/PagesLayout/Inset';

const Staff = () => {
	return (
		<StaffStyled className='Staff'>
			<Inset>
				<h1>Adoption</h1>
				<p>At Happy Cat, we believe that every cat deserves a chance at happiness. We strive to find the perfect homes for our rescued cats, considering both the feline's needs and the potential adopter's lifestyle. Our adoption process is thorough but rewarding, ensuring that our cats are placed in environments where they will thrive.</p>
				<StaffList />
			</Inset>
		</StaffStyled>
	);
};

export default Staff;

const StaffStyled = styled.div`

`;