import { useNavigate } from "react-router-dom";
import useAuthStatus from "../../hooks/useAuth";
import usePromptsByUser from "../../hooks/usePrompsByUser";
import AppBar from "../modules/AppBar";
import PostBtn from "../modules/postBtn";
import page_style from "./page_style.module.css";
import user_style from "./user_style.module.css"

const UserPage = () => {

    const navigate = useNavigate();

    const { currentUser } = useAuthStatus();
    
    const {prompts} = usePromptsByUser(currentUser?.uid ?? "");

    const PromptCard = ({title, description, id} :{title : string, description : string, id : string}) => {
        return(
            <div className={user_style.prompt_el} onClick={()=>{navigate(`/prompt/${id}`)}}>
                <h1 className={user_style.prompt_title}>
                    {title}
                </h1>
                <div className={user_style.prompt_sub}>
                    {description}
                </div>
                <div className={user_style.prompt_date}>
                    created 24/10/31
                </div>
                <div className={user_style.divider}/>
            </div>
        );
    }

    return(
        <div className={page_style.wrapper}>
            <AppBar/>
            
            <div className={user_style.content_wrapper}>
                <div className={user_style.profile_wrapper}>
                    <div style={{height:'64px'}} />
                    <div className={`${user_style.profile} ${page_style.paper}`}>
                        {currentUser?.email}
                        <div className={user_style.profile_img} style={{opacity:0}}/>
                        <div className={user_style.profile_text}>

                        </div>
                        
                        <div className={page_style.spacer}/>

                        {/* <Button text="Edit Profile" /> */}
                    </div>
                </div>

                <div className={user_style.prompt_wrapper}>
                    <div style={{height:'64px'}}/>
                    <div className={`${user_style.prompt} ${page_style.paper}`}>
                        <div className={user_style.prompt_head}>Your Prompt</div>
                        
                        { prompts?.map((item)=><PromptCard title={item.title} description={item.description} id={item.id}/>)}
                    </div>
                </div>
            </div>

            <PostBtn/>
        </div>
    );
}

export default UserPage;