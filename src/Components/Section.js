import '../App.css'
import { Link } from 'react-router-dom'

export function Section(props){
    return(
        <Link to={'/section'}>
            <div className='section'>
                <h6>Section</h6>
                <h3>{props.num}</h3>
            </div>
        </Link>
    )
}