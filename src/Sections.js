import { Link } from 'react-router-dom';
import './App.css';

export function Sections()
{
    return (
        <div className='sections'>
            <h1 className='title-text'>
                Course Sections:
            </h1>
            <div className='section-cont'>
                <Link to={'/section'}>
                    <div className='section'>

                    </div>
                </Link>
            </div>

            
            <div className='button-cont'>
                <Link to={'/test'}>
                    <button class='button'>Test Yourself</button>
                </Link>
            </div>
        </div>
    );
}