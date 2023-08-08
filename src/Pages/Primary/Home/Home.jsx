import styled from 'styled-components';

/* Components ---------------------------*/
import Slideshow from './Slideshow/Slideshow';
import Tabbed from './Tabbed/Tabbed';
import Inset from '@/Common/PagesLayout/Inset';


const Home = () => {
    return (
        <HomeStyled className='Home'>
            <h1>Home</h1>
            <Slideshow />
            <Inset>
                <Tabbed />
            </Inset>
        </HomeStyled>
    );
};

export default Home;

const HomeStyled = styled.div`

    h1 {
        display: none;
    }

`;