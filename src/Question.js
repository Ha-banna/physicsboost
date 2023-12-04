import './App.css'
export function Question(props){
    return(
        <div className='q-div'>
            <h3 className='qhead'>1. {props.question}</h3>

            {props.choices.map(choice => {
                return(
                    <label className='q-label'>
                        <input type='radio' id='radio' value={choice} name='test-question'></input>
                        <p className='qchoice' for={'radio'}>{choice}</p>
                    </label>
                )
            } )}
        </div>
    );
}