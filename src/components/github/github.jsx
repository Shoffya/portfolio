import './github.css'
import { BsMouse } from 'react-icons/bs';
import { BsGithub } from 'react-icons/bs';

function Github() {
    return (
        <div id='github' className="container github-container">
            <h2>That's all
                <a href="#home">
                    <h3>
                        <BsMouse />- scroll up -
                    </h3>
                </a>
            </h2>
            <a href="" className="github-link">
                <BsGithub className='gitHub' />
            </a>
        </div>
    )
}

export default Github;