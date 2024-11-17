import { useNavigate } from "react-router-dom";
import appbar_style from "./appbar_style.module.css"
import useAuthStatus from "../../hooks/useAuth";
import page_style from "../pages/page_style.module.css"
import maskString from "../../helper/maskString";


const AppBar = () => {
    const navigate = useNavigate();
    const { currentUser } = useAuthStatus();

    const onUserClick = () => {
        if(!currentUser){
            navigate("/sign/signIn");
        }else{
            navigate("/user");
        }
    }

    return(
        <div className={appbar_style.wrapper}>
            <div style={{width:'12px'}}/>
            <span className={`material-icons ${appbar_style.home}`} onClick={()=>{navigate("/")}}>
                home
            </span>

            <div className={page_style.spacer}></div>

            <div onClick={onUserClick} style={{cursor: "pointer"}}>
                {currentUser ? maskString(currentUser.email ?? "") : "Login"}
            </div>
        </div>
    );
}

export default AppBar;