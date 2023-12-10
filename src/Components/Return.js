import { Link } from 'react-router-dom';
import '../App.css'
export function Return(props)
{
    return(
        <Link to={props.path}>
            <div className='return-cont'>
                <i class="material-symbols-outlined return-arrow">
                    arrow_back
                </i>
                <h2 className='return-text'>
                    Go Back To {props.displayText}
                </h2>
            </div>
        </Link>
    );
}