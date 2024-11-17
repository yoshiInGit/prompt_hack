import { useNavigate } from "react-router-dom";
import useAuthStatus from "../../hooks/useAuth";
import postBtnStyle from "./postBtn_style.module.css"

const PostBtn = () => {
    const { currentUser } = useAuthStatus();
    const navigate = useNavigate();

    const onClick = () => {
        if(!currentUser){
            navigate("/sign/singIn");
        }else{
            navigate("/post")
        }
    }

    return(
        <div className={postBtnStyle.wrapper} onClick={onClick}>
            <span className="material-icons">
                edit
            </span>
        </div>
    );
}

export default PostBtn;

