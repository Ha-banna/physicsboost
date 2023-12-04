import './App.css'
import { Question } from './Question';

export function TestPage(){
    return(
        <>
            <h1 className='test-page-h1'>Test yourself!</h1>
            <div className='q-cont'>
                <Question question={'how are you?'} choices={['idk', 'test', 'let', 'yes']}></Question>
            </div>
        </>
    );
}