import AppBar from "../modules/AppBar";
import Button from "../modules/Button";
import page_style from "./page_style.module.css";
import user_style from "./user_style.module.css"

const UserPage = () => {
    return(
        <div className={page_style.wrapper}>
            <AppBar/>
            
            <div className={user_style.content_wrapper}>
                <div className={user_style.profile_wrapper}>
                    <div style={{height:'64px'}}/>
                    <div className={`${user_style.profile} ${page_style.paper}`}>
                        <div className={user_style.profile_img}/>
                        <div className={user_style.profile_text}>
                            Name:oooooo ooooooo

                        </div>
                        
                        <div className={page_style.spacer}/>

                        <Button text="Edit Profile"/>
                    </div>
                </div>

                <div className={user_style.prompt_wrapper}>
                    <div style={{height:'64px'}}/>
                    <div className={`${user_style.prompt} ${page_style.paper}`}>
                        <div className={user_style.prompt_head}>Your Prompt</div>
                        <div className={user_style.prompt_el}>
                            <h1 className={user_style.prompt_title}>
                                ○○○○○○○○○○○○○○○○○○
                            </h1>
                            <div className={user_style.prompt_sub}>
                                ××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××
                            </div>
                            <div className={user_style.prompt_date}>
                                created 24/10/31
                            </div>
                            <div className={user_style.divider}/>
                        </div>

                        <div className={user_style.prompt_el}>
                            <h1 className={user_style.prompt_title}>
                                ○○○○○○○○○○○○○○○○○○
                            </h1>
                            <div className={user_style.prompt_sub}>
                                ××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××
                            </div>
                            <div className={user_style.prompt_date}>
                                created 24/10/31
                            </div>
                            <div className={user_style.divider}/>
                        </div>

                        <div className={user_style.prompt_el}>
                            <h1 className={user_style.prompt_title}>
                                ○○○○○○○○○○○○○○○○○○
                            </h1>
                            <div className={user_style.prompt_sub}>
                                ××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××
                            </div>
                            <div className={user_style.prompt_date}>
                                created 24/10/31
                            </div>
                            <div className={user_style.divider}/>
                        </div>

                        <div className={user_style.prompt_el}>
                            <h1 className={user_style.prompt_title}>
                                ○○○○○○○○○○○○○○○○○○
                            </h1>
                            <div className={user_style.prompt_sub}>
                                ××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××
                            </div>
                            <div className={user_style.prompt_date}>
                                created 24/10/31
                            </div>
                            <div className={user_style.divider}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default UserPage;