import AppBar from "../modules/AppBar";
import post_style from "./post_style.module.css"
import page_style from "./page_style.module.css"
import Button from "../modules/Button";
import React, { useRef, useState } from "react";
import { useAddPrompt } from "../../hooks/usePostPrompt";
import { useNavigate } from "react-router-dom";


const PostPage = () => {
    const navigate = useNavigate();

    //タイトル・説明
    const titleRef = useRef("");
    const descriptionRef = useRef("");

    const onTitleInput = (e : React.ChangeEvent<HTMLInputElement>) => {
        titleRef.current = e.target.value;
    }

    const onDescriptionInput = (e : React.ChangeEvent<HTMLTextAreaElement>) => {
        descriptionRef.current = e.target.value;
    }

    // AI選択
    const engineRef = useRef("");
    const [showSelectEngineDialog, setShowSelectEngineDialog] = useState(false);
    const [showInputEngineDialog, setShowInputEngineDialog]   = useState(false); 

    const onEngineClicked = () => {
        setShowSelectEngineDialog(true);
    }

    const onOtherEngineClicked = () => {
        setShowSelectEngineDialog(false);
        setShowInputEngineDialog(true);
    }

    const onEngineSelected = (name : string) => {
        engineRef.current = name;
        setShowSelectEngineDialog(false);
    }

    const engineInputRef = useRef<HTMLInputElement>(null);
    const onEngineInputted = () => {
        engineRef.current = engineInputRef.current?.value ?? "";
        setShowInputEngineDialog(false);
    }

    //プロンプト入力
    const [promptLength, setPromptLength] = useState(2);
    const promptRefs = useRef(["", ""]);

    const onPromptAddCLicked = () => {
        setPromptLength(promptLength + 2);
        promptRefs.current.push("");
        promptRefs.current.push("");
    }

    const onPromptRemoveClicked = () => {
        if(promptLength >= 4){
            setPromptLength(promptLength -2);
            promptRefs.current.pop();
            promptRefs.current.pop();
        }
    }

    const onPromptInputted = (e : React.ChangeEvent<HTMLTextAreaElement>, idx: number) => {
        promptRefs.current[idx] = e.target.value;
    }

    const { addPrompt, isLoading} = useAddPrompt();
    const onTryPost = async () => {
        if(isLoading){
            return;
        }

        const docRef = await addPrompt({
            title : titleRef.current,
            description : descriptionRef.current,
            ai : engineRef.current,
            prompts : promptRefs.current,
        });

        navigate(`/prompt/${docRef?.id}`)
    }




    const SelectEngineModal = () => {
        return(
            <div className={page_style.modal_wrapper}>
                <div className={`${post_style.engineModal_content} ${page_style.paper}`}>
                    <div className={post_style.engineModal_title}>AIを選ぶ</div>
                    <div className={post_style.engineModal_list}>
                        <div className={post_style.engineModal_engine} onClick={() => {onEngineSelected("ChatGPT")}}>ChatGPT</div>
                        <div className={post_style.engineModal_engine} onClick={() => {onEngineSelected("Copilot")}}>Copilot</div>
                        <div className={post_style.engineModal_engine} onClick={() => {onEngineSelected("Gemini")}}>Gemini</div>
                        <div className={post_style.engineModal_engine} onClick={() => {onEngineSelected("Perplexity AI")}}>Perplexity AI</div>
                        <div className={post_style.engineModal_engine} onClick={() => {onEngineSelected("Catchy")}}>Catchy</div>
                        <div className={post_style.engineModal_engine} onClick={() => {onEngineSelected("SAKUBUN")}}>SAKUBUN</div>
                        <div className={post_style.engineModal_engine} onClick={() => {onEngineSelected("Transcope")}}>Transcope</div>
                        <div className={post_style.engineModal_engine} onClick={() => {onEngineSelected("Claude")}}>Claude</div>
                        <div className={post_style.engineModal_engine} onClick={() => {onEngineSelected("felo")}}>felo</div>
                        <div className={post_style.engineModal_engine} onClick={onOtherEngineClicked}>その他</div>
                    </div>
                </div>
            </div>
        );
    }
    
    const InputEngineModal =() => {
        return(
            <div className={page_style.modal_wrapper}>
                <div className={`${post_style.inputEngineModal_content} ${page_style.paper}`}>
                    <div className={post_style.inputEngineModal_title}>AIの名前を入力</div>
                    <input ref={engineInputRef} type="text" className={post_style.inputEngineModal_input} placeholder="Ex) ChatGPT"/>
    
                    <div className={page_style.spacer}></div>
    
                    <div className={post_style.inputEngineModal_btnWrapper}>
                        <span className={post_style.inputEngineModal_btn} onClick={onEngineInputted}>OK</span>
                    </div>
                </div>
            </div>
        );
    }

    const YouPromptInput = (props : {idx : number}) => {
        return(
            <>
                <div className={post_style.prompt_by}>[YOU]</div>
                <textarea defaultValue={promptRefs.current[props.idx]} className={post_style.prompt} rows={10} onChange={(e)=>onPromptInputted(e, props.idx)} data-idx={props.idx}></textarea>
            </>
        );
    }

    const AIPromptInput = (props : {idx : number}) => {
        return(
            <>
                <div className={post_style.prompt_by}>[ChatGPT]</div>
                <textarea defaultValue={promptRefs.current[props.idx]} className={post_style.prompt} rows={15} onChange={(e)=>onPromptInputted(e, props.idx)} data-idx={props.idx}></textarea>
            </>
        );
    }

    const promptInputs = [];
    for(let i=0;i<promptLength;i++){
        if(i % 2 == 0){
            promptInputs.push(<YouPromptInput idx={i}/>);
        }else{
            promptInputs.push(<AIPromptInput idx={i}/>);
        }
    }

    return(
        <div>
            <AppBar/>

            <div className={post_style.wrapper}>
                <div className={`${post_style.content} ${page_style.paper}`}>
                    <input className={post_style.title_input} onChange={onTitleInput} type="text" placeholder="Title"/>

                    <textarea className={post_style.description} onChange={onDescriptionInput} rows={10}  placeholder="Description"/>

                    <div style={{height:"32px"}}/>

                    <div className={post_style.prompt_head}>プロンプトの記録</div>

                    {/* AI選択 */}
                    <div className={post_style.prompt_engine_wrapper}>
                        <div className={post_style.prompt_engine} onClick={onEngineClicked}>
                            {engineRef.current=="" ? "AIを選択" : engineRef.current}
                            <span className={page_style.spacer}/>
                            <span className="material-icons">
                                arrow_drop_down
                            </span>
                        </div>
                    </div>

                    {/* プロンプト記録 */}
                    {promptInputs}

                    <div className={post_style.btn_wrapper}>
                        <div className={post_style.btn} onClick={onPromptAddCLicked}>
                            <span className="material-icons">add</span>
                        </div>

                        {promptLength >= 4 &&
                            <div className={post_style.btn} onClick={onPromptRemoveClicked}>
                                <span className="material-icons">remove</span>
                            </div>
                        }
                    </div>

                    <div style={{height:"32px"}}/>


                    <Button text="POST" onClick={onTryPost}/>

                </div>

                <div style={{height:"24px"}}/>

            </div>
            {showSelectEngineDialog && SelectEngineModal()}
            {showInputEngineDialog  && InputEngineModal()} 
        </div>
    );
}

export default PostPage;