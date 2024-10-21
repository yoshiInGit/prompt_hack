import page_style from "./page_style.module.css"
import sign_style from "./sign_style.module.css"
import AppBar from "../modules/AppBar";
import Button from "../modules/Button";

const SignPage = () => {
    return(
        <div>
            <AppBar/>

            <div className={sign_style.wrapper}>
                <div className={`${sign_style.card} ${page_style.paper}`}>
                    <div className={page_style.spacer}></div>

                    <div className={sign_style.title}>Sign In</div>

                    <input className={sign_style.input} type="text" placeholder={"Email"}/>
                    <input className={sign_style.input} type="text" placeholder={"Password"}/>

                    <Button text="SIGN IN"/>

                    <div className={page_style.spacer}></div>
                </div>
            </div>
        </div>
    );
}

export default SignPage;