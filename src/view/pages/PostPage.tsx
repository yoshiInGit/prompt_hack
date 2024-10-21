import AppBar from "../modules/AppBar";
import post_style from "./post_style.module.css"
import page_style from "./page_style.module.css"
import Button from "../modules/Button";

const PostPage = () => {
    return(
        <div>
            <AppBar/>

            <div className={post_style.wrapper}>
                <div className={`${post_style.content} ${page_style.paper}`}>
                    <input className={post_style.title_input} type="text" placeholder="Title"/>

                    <textarea className={post_style.description} rows={10}  placeholder="Description"/>

                    <div style={{height:"32px"}}/>

                    <div className={post_style.prompt_head}>プロンプトの記録</div>

                    <div className={post_style.prompt_engine_wrapper}>
                        <div className={post_style.prompt_engine}>
                            ChatGPT
                            <span className={page_style.spacer}/>
                            <span className="material-icons">
                                arrow_drop_down
                            </span>
                        </div>
                    </div>

                    <div className={post_style.prompt_by}>[YOU]</div>
                    <textarea className={post_style.prompt} rows={10} id=""></textarea>

                    <div className={post_style.prompt_by}>[ChatGPT]</div>
                    <textarea className={post_style.prompt} rows={10} id=""></textarea>

                    <div className={post_style.add_btn}>
                        <span className="material-icons">
                            add
                        </span>
                    </div>

                    <div style={{height:"32px"}}/>


                    <Button text="POST"/>

                </div>

                <div style={{height:"24px"}}/>

            </div>
        </div>
    );
}

export default PostPage;