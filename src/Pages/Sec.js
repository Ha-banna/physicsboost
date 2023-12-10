import '../App.css'
import { Return } from '../Components/Return';

export function Sec(){
    return (
        <>
            <Return displayText='Home' path={'/'}></Return>
        </>
    );
}