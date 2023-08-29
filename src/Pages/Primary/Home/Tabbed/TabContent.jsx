import styled from 'styled-components';

/* Media Query ---------------------------*/
import { breakpoints } from "@/Common/useMediaQuery";

const TabContent = ({ curTab }) => {
	return (
		<TabContentStyled className='TabContent'>
			<div className='column1'>
				<img src={curTab.image} alt={curTab.title} />
			</div>
			<div className='column2'>
				<h3>{curTab.title}</h3>
				<div dangerouslySetInnerHTML={{ __html: curTab.text }} />
			</div>
		</TabContentStyled>
	);
};

export default TabContent;

const TabContentStyled = styled.div`
    padding: 20px;
    background-color: #F49387;
	border-radius: 0px 5px 5px 5px;

    @media ${breakpoints.isMediumAndUp} {
        display: grid;
        grid-template-columns: 1fr 2fr;
        gap: 1rem;
    }



    .column1 {
        img {
            display: block;
            max-width: 100%;
            margin: 0px auto 15px;
            @media ${breakpoints.isMediumAndUp} {
                margin: 0px;
            }
        }

    }

    .column2 {
        h3 {
            font-size: 30px;
            color: #F4F3F2;
        }

        p {
            font-size: 18px;
            color: #2C2E42;
            margin-bottom: 20px;
            line-height: 150%;
        }
    }
`;