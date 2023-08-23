import styled from 'styled-components';


const StaffBio = ({ member }) => {
	return (
		<StaffBioStyled className='StaffBio'>
			<div className='year'><b>Age:</b> {member.age}</div>
			<div className='year'><b>Gender:</b> {member.gender}</div>
			<p>{member.bio}</p>
		</StaffBioStyled>
	);
};

export default StaffBio;

const StaffBioStyled = styled.div`
    padding: 20px;
    font-size: 16px;

	.year {
		padding: 0px 0px 5px;
		color: #F2EBE7;
	}

	p {
		font-size: 15px;
		color: #F2EBE7;
	}
`;