import styled from 'styled-components';

/* Components ---------------------------*/
import StaffBio from './StaffBio';

const StaffMember = ({ member }) => {
	return (
		<StaffMemberStyled className='StaffMember'>
			<img src={member.image} alt={member.name} />
			<h3>{member.name}</h3>
			<StaffBio member={member} />
		</StaffMemberStyled>
	);
};

export default StaffMember;

const StaffMemberStyled = styled.div`

    background-color: #2C2E42;
	border-radius: 20px;

    img {
        width: 85%;
        display: block;
		border-radius: 15px;
		margin: 24px auto;
    }

    h3 {
        font-size: 24px;
        color: #2C2E42;
        background-color: #F49387;
		text-align: center;
        margin: 20px 20px 0px;
        padding: 5px 20px;
		border-radius: 20px
    }
`;