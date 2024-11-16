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
                    <h1 className={prompt_style.report_title}> Chain of Thoughtを用いた論理的な推論</h1>
                    <div className={prompt_style.report_sub}>
                    このプロンプトは、Chain of Thought (CoT) を活用して複数のステップにわたる推論を行わせることを目的としています。CoTでは、AIが複雑な問題を解決するために、各ステップで順次説明を行い、論理的なプロセスを踏んで解を導き出します。これにより、AIが複雑な計算や論理的な思考を分かりやすく展開することが可能になり、特に数学的な問題や判断が必要なタスクにおいて効果的です。

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
                        ある学校には100人の生徒がいます。そのうち60人がサッカーをし、40人がバスケットボールをします。サッカーもバスケットボールもする生徒は20人です。サッカーかバスケットボールのいずれか、または両方をする生徒は何人でしょうか？問題を解決するために一つずつステップを追って考えてください。
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
                        {`1. 問題の情報を整理する
生徒の総数: 100人
サッカーをする生徒: 60人
バスケットボールをする生徒: 40人
サッカーとバスケットボールの両方をする生徒: 20人
2. 求めたいもの
サッカーかバスケットボールのいずれか、または両方をする生徒の人数を求めます。

3. 集合の公式を使う
サッカーまたはバスケットボールをする生徒の人数は、以下の集合の公式を使って求めます。

∣𝐴∪𝐵∣ = ∣𝐴∣+∣𝐵∣−∣𝐴∩𝐵∣
∣A∪B∣=∣A∣+∣B∣−∣A∩B∣
ここで、

∣𝐴∣
∣A∣ はサッカーをする生徒の数（60人）
∣𝐵∣
∣B∣ はバスケットボールをする生徒の数（40人）
∣𝐴∩𝐵∣
∣A∩B∣ はサッカーとバスケットボールの両方をする生徒の数（20人）
4. 数値を公式に当てはめる
∣𝐴∪𝐵∣=60+40−20
∣A∪B∣=60+40−20
5. 計算をする
∣𝐴∪𝐵∣= 80 ∣A∪B∣=80
6. 答え
サッカーかバスケットボールのいずれか、または両方をする生徒の人数は80人です。`}
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
                        正しいかどうか検証して。何も間違いがなかったら「問題なし」と出力して
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
                        検証結果: 問題なし 
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PromptPage;