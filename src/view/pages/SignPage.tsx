import page_style from "./page_style.module.css"
import sign_style from "./sign_style.module.css"
import AppBar from "../modules/AppBar";
import Button from "../modules/Button";
import useSignUp from "../../hooks/useSignUp";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";

const SignPage = () => {
    const navigate = useNavigate();

    const SignUp = () => {
        const { signUp, loading } = useSignUp();
        const emailRef = useRef('');
        const passwordRef = useRef('');
        const handleSignUp = async () => {
            if(loading){
                return;
            }

            console.log(emailRef.current, passwordRef.current);

            if (emailRef.current!="" && passwordRef.current!="") {
              await signUp(emailRef.current, passwordRef.current);

              navigate("/");
            }
        };

        return(
            <div className={sign_style.wrapper}>
                <div className={`${sign_style.card} ${page_style.paper}`}>
                    <div className={page_style.spacer}></div>

                    <div className={sign_style.title}>Welcome!</div>

                    <input 
                        className={sign_style.input} 
                        type="text" 
                        placeholder={"Email"}
                        onChange={(e) => emailRef.current = e.target.value}
                    />

                    <input 
                        className={sign_style.input} 
                        type="text" 
                        placeholder={"Password"}
                        onChange={(e) => passwordRef.current = e.target.value}
                    />

                    <Button text="SIGN UP" onClick={handleSignUp}/>

                    <div className={page_style.spacer}></div>
                </div>
            </div>
        );
    }

    return(
        <div>
            <AppBar/>

            <SignUp/>
        </div>
    );
}

export default SignPage;