import button_style from "./button_style.module.css"

const Button = ({text, onClick} : {text : string, onClick? :React.MouseEventHandler<HTMLDivElement>}) => {
    return(
        <div className={button_style.wrapper} onClick={onClick}>
            {text}
        </div>
    );
}

export default Button