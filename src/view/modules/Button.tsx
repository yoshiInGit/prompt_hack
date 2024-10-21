import button_style from "./button_style.module.css"

const Button = ({text} : {text : string}) => {
    return(
        <div className={button_style.wrapper}>
            {text}
        </div>
    );
}

export default Button