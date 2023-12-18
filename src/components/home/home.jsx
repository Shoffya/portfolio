import './home.css';
import img from '../props/img2.jpg';
import Buttons from '../button/button';
import { BsMouse } from 'react-icons/bs';

function Home() {
    return (
        <div id='home' className="container home-container">
            <div className='logo'>
                <div className="hover-show">
                    <span className="circle"></span>
                    <span className="circle"></span>
                    <span className="circle"></span>
                    <span className="circle"></span>
                    <span className="circle"></span>
                    <span className="circle"></span>
                    <span className="circle"></span>
                    {/* <span className="circle"></span> */}
                </div>

                <img src={img} alt='' />
                <h3 className="title"><b>Skills</b></h3>
            </div>

            <a href="#github" className="scroll-down">
                <hr />
                <h5>scroll down</h5>
                <BsMouse className='scroll' />
            </a>

            <Buttons />
        </div>
    );
}

// const Toggle = document.querySelector('.main-img');
// Toggle.addEventListener('click', () => {
//     Toggle.classList.toggle('active');
// });

export default Home;