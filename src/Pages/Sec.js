import '../App.css'
import { Return } from '../Components/Return';

export function Sec(){
    const loc = window.location.hash
    return (
        <>
            <Return displayText='Home' path={'/'}></Return>
        </>
    );
}