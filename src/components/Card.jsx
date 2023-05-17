import Button from './button/button';
import './card.css'
import Input from './input/input';

function Card() {
    return (
        <div className='card'>
            <h1 className='title-login'>Login</h1>
            <label htmlFor="email">Digite seu email</label>
            <Input type='email' name='email' id='email' placeHolder='Digite seu email' />
            <label htmlFor="email">Digite sua senha</label>
            <Input type='password' name='password' id='password' placeHolder='Digite sua senha' />
            <a href='#' className='recoveruser'>Esqueceu a senha?</a>
            <Button />
            <a className='register' href='#'>Cadastre-se</a>
        </div>
    )
}

export default Card;