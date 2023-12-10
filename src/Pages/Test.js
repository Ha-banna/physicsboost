import { Link } from 'react-router-dom';
import '../App.css'
import { Return } from '../Components/Return';

export function Test(){
    return(
        <>
        
        <Return displayText='Home' path='/'></Return>
        <div className='cont'>
            <form className='section-selection-cont'>
                <h1 className='title-text margin-bottom'>Select Desired Sections</h1>
                <hr/>
                <label class="section-selection-label"><span className='color'>Section 1</span>
                    <input type="checkbox"/>
                    <span class="checkmark"></span>
                </label>

                <label class="section-selection-label"><span className='color'>Section 2</span>
                    <input type="checkbox"/>
                    <span class="checkmark"></span>
                </label>

                <label class="section-selection-label"><span className='color'>Section 3</span>
                    <input type="checkbox"/>
                    <span class="checkmark"></span>
                </label>

                <label class="section-selection-label"><span className='color'>Section 4</span>
                    <input type="checkbox"/>
                    <span class="checkmark"></span>
                </label>
                
                <Link to={'/testpage'}>
                    <input type='button' value={"Start Test"} className='button'/>
                </Link>
            </form>
            <div className='extra-space-cont'>
            </div>
        </div>
        </>
    );
}