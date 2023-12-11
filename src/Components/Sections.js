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
                <Section num={2}></Section>
                <Section num={3}></Section>
                <Section num={4}></Section>
                <Section num={5}></Section>
                <Section num={6}></Section>
                <Section num={7}></Section>
                <Section num={8}></Section>
            </div>

            
            <div className='button-cont'>
                <Link to={'/test'}>
                    <button class='button'>Test Yourself</button>
                </Link>
            </div>
        </div>
    );
}