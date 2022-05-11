import React from 'react';
import style from './Button.module.scss';

interface Props {
    type?: "button" | "submit" | "reset" | undefined,
    onClick?: () => void,
    children?: React.ReactNode
}

function Button({ onClick, type, children }: Props) {
    return (
        <button onClick={onClick} type={type} className={style.button}>
            {children}
        </button>
    )
}

//Exemplo de como seri a mesma coisa mas sem funcion e interface
class Button1 extends React.Component<{
    children: any,
    type?: "button" | "submit" | "reset" | undefined,
    onClick?: () => void
}>{
    render() {
        const { type = "button", onClick } = this.props;
        return (
            <button onClick={onClick} type={type} className={style.button}>
                {this.props.children}
            </button>
        )
    }
}

export default Button;