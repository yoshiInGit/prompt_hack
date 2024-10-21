import AppBar from "../modules/AppBar";
import page_style from "./page_style.module.css"
import prompt_style from "./prompt_style.module.css"

const PromptPage = () => {
    return(
        <div className={`${page_style.wrapper} ${prompt_style.wrapper}`}>
            <AppBar/>
            <div className={prompt_style.content_wrapper}>
                <div className={`${prompt_style.report} ${page_style.paper}`}>
                    <div className={prompt_style.report_head}>
                    <span className={`material-icons ${prompt_style.icon_btn}`}>
                        link
                    </span>
                    </div>
                    <div className={prompt_style.report_date}>created 24/10/31</div>
                    <h1 className={prompt_style.report_title}>○○○○○○○○○○○○○○○○○</h1>
                    <div className={prompt_style.report_sub}>
                            ××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××
                    </div>
                </div>

                <div className={`${prompt_style.prompt_wrapper} ${prompt_style.me}`}>
                    <span className={prompt_style.prompt_engine}>[me]</span>
                    <div className={`${prompt_style.prompt} ${page_style.paper}`}>
                        <div className={prompt_style.prompt_head}>
                            <span className={`material-icons ${prompt_style.icon_btn}`}>
                                content_copy
                            </span>
                        </div>
                        <div className={prompt_style.prompt_body}>
                            ××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××
                            ××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××
                            ××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××
                        </div>
                    </div>
                </div>

                <div className={`${prompt_style.prompt_wrapper} ${prompt_style.ai}`}>
                <span className={prompt_style.prompt_engine}>[chatGPT]</span>
                    <div className={`${prompt_style.prompt} ${page_style.paper}`}>
                        <div className={prompt_style.prompt_head}>
                            <span className={`material-icons ${prompt_style.icon_btn}`}>
                                content_copy
                            </span>
                        </div>
                        <div className={prompt_style.prompt_body}>
                            ××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××
                            ××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××
                            ××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××
                        </div>
                    </div>
                </div>

                <div className={`${prompt_style.prompt_wrapper} ${prompt_style.me}`}>
                    <span className={prompt_style.prompt_engine}>[me]</span>
                    <div className={`${prompt_style.prompt} ${page_style.paper}`}>
                        <div className={prompt_style.prompt_head}>
                            <span className={`material-icons ${prompt_style.icon_btn}`}>
                                content_copy
                            </span>
                        </div>
                        <div className={prompt_style.prompt_body}>
                            ××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××
                            ××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××
                            ××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××
                        </div>
                    </div>
                </div>

                <div className={`${prompt_style.prompt_wrapper} ${prompt_style.ai}`}>
                    <span className={prompt_style.prompt_engine}>[chatGPT]</span>
                    <div className={`${prompt_style.prompt} ${page_style.paper}`}>
                        <div className={prompt_style.prompt_head}>
                            <span className={`material-icons ${prompt_style.icon_btn}`}>
                                content_copy
                            </span>
                        </div>
                        <div className={prompt_style.prompt_body}>
                            ××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××
                            ××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××
                            ××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PromptPage;