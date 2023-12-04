import './App.css';
import logonobg from './logo-nobg.png';

export function Header ()
{
    return(
        <header>
            <img className='logo' src={logonobg} alt='logo'/>
            <h1 className='logo-text'>Physics Boost</h1>
        </header>
    );
}