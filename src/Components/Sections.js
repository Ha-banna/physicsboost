import { Link } from 'react-router-dom';
import '../App.css';
import { Section } from './Section';

export function Sections()
{
    return (
        <div className='sections'>
            <h1 className='title-text'>
                Course Sections:
            </h1>
            <div className='section-cont'>
                <Section num={1}></Section>
            </div>

            
            <div className='button-cont'>
                <Link to={'/test'}>
                    <button class='button'>Test Yourself</button>
                </Link>
            </div>
        </div>
    );
}