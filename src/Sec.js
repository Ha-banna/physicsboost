import './App.css'
import { Return } from './Return';

export function Sec(){
    return (
        <>
            <Return displayText='Home' path={'/'}></Return>
        </>
    );
}