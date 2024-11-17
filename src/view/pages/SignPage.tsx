import page_style from "./page_style.module.css"
import sign_style from "./sign_style.module.css"
import AppBar from "../modules/AppBar";
import Button from "../modules/Button";
import useSignUp from "../../hooks/useSignUp";
import { useRef } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useSignIn from "../../hooks/useSignIn";
import useAuthStatus from "../../hooks/useAuth";

const SignPage = () => {
    const navigate = useNavigate();
    const {mode} = useParams();

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

    const SignIn = () => {
        const { currentUser} = useAuthStatus();

        const { signIn, loading, error } = useSignIn();
        const emailRef = useRef('');
        const passwordRef = useRef('');
        const handleSignIn = async () => {
            if(loading){
                return;
            }

            console.log(emailRef.current, passwordRef.current);

            if (emailRef.current!="" && passwordRef.current!="") {
              await signIn(emailRef.current, passwordRef.current);

              if(error){
                return
              }

              navigate("/");
            }
        };

        return(
            <div className={sign_style.wrapper}>
                <div className={`${sign_style.card} ${page_style.paper}`}>
                    <div className={page_style.spacer}></div>

                    <div className={sign_style.title}>Hello!</div>

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

                    <Button text="SIGN IN" onClick={handleSignIn}/>

                    <div style={{height: "24px"}}></div>

                    <Button text="CREATE NEW ACCOUNT" onClick={()=>{navigate("/sign/signUp")}}/>

{/* 
                    {loading ? "loading" : "no loading"}<br/>
                    {error ? error : "no error"}<br/>
                    {currentUser ? currentUser.email : "no user"}<br/> */}



                    <div className={page_style.spacer}></div>
                </div>
            </div>
        );
    }

    return(
        <div>
            <AppBar/>

            {mode=="signUp" ? <SignUp/> : <SignIn/>}
        </div>
    );
}

export default SignPage;