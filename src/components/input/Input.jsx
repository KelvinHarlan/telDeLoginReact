import './input.css';

function Input({type, name, id, placeHolder}) {
    return (
        <input type= {type} name={name} id={id} placeholder={placeHolder} />
    )
}

export default Input;
