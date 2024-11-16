import AppBar from "../modules/AppBar";
import page_style from "./page_style.module.css"
import home_style from "./home_styele.module.css"


const HomePage = ()=> {
    const Genres = () => {
        return(
            <div className={home_style.genre_wrapper}>
                <div className={`${home_style.genre} ${page_style.paper}`}>
                    <span className="material-icons">star</span>
                    おすすめ
                </div>
                <div className={`${home_style.genre} ${page_style.paper}`}>
                    <span className="material-icons">question_answer</span>
                    チャット
                </div>
                <div className={`${home_style.genre} ${page_style.paper}`}>
                    <span className="material-icons">school</span>
                    教育
                </div>
                <div className={`${home_style.genre} ${page_style.paper}`}>
                    <span className="material-icons">code</span>
                    コード
                </div>
                <div className={`${home_style.genre} ${page_style.paper}`}>
                    <span className="material-icons">public</span>
                    SNS
                </div>
                <div className={`${home_style.genre} ${page_style.paper}`}>
                    <span className="material-icons">description</span>
                    議事録
                </div>
                <div className={`${home_style.genre} ${page_style.paper}`}>
                    <span className="material-icons">edit</span>
                    ライティング
                </div>
                <div className={`${home_style.genre} ${page_style.paper}`}>
                    <span className="material-icons">translate</span>
                    翻訳
                </div>
                <div className={`${home_style.genre} ${page_style.paper}`}>
                    <span className="material-icons">lightbulb</span>
                    アイデア
                </div>
                <div className={`${home_style.genre} ${page_style.paper}`}>
                    <span className="material-icons">mail</span>
                    メール
                </div>
                <div className={`${home_style.genre} ${page_style.paper}`}>
                    <span className="material-icons">history_edu</span>
                    創作
                </div>
                <div className={`${home_style.genre} ${page_style.paper}`}>
                    <span className="material-icons">more_horiz</span>
                    その他
                </div>

            </div>
        )
    }

    const PromptCard = ({title, description}:{title:string, description:string}) => {
        return(
            <div className={`${home_style.promptCard_wrapper} ${page_style.paper}`}>
                <div className={home_style.promptCard_title}>{title}</div>
                <div className={home_style.promptCard_description}>{description}</div>
            </div>
        );
    }

    return(
        <div className={`${page_style.wrapper} ${home_style.wrapper}`}>
            <AppBar/>
            <div className={home_style.content_wrapper}>
                <Genres/>

                <div className={home_style.forYou}>おすすめ</div>
                <div className={home_style.promptCards}>
                    <PromptCard title="要約のための具体的な質問" description="具体的な形式（3文）を指定することで、簡潔かつ的確な要約を促します。このようなプロンプトは要約タスクにおいて重要で、回答が端的であることを保証します。"/>
                    <PromptCard title="文調の調整" description="内容を変えずに文調だけを調整するよう指示します。プロフェッショナルな設定での文調の調整は、内容の明確さと受け手の印象に影響を与えます。"/>
                    <PromptCard title="制約付きのストーリー作成" description="ジャンルや設定、どんでん返しといった制約を設けることで、AIがより構造的なストーリーを生成します。具体的な指示は豊かな物語を生成するのに役立ちます。"/>
                    <PromptCard title="技術サポートのための指示に従う" description="明確なプロンプトがAIに実用的でわかりやすい手順を提供するように促します。これは、あらゆるレベルのユーザーにアクセスしやすい説明を生成するのに理想的です。"/>
                    <PromptCard title="構造化されたデータ生成" description="具体的な内容（国と首都）と形式（表）を指定することで、情報を明確に整理した出力を得られます。この種のプロンプトは、データを体系的に整理するために有効です。"/>
                    <PromptCard title="創造的なデザインのための詳細な説明" description="創造的な描写のためには詳細なプロンプトが重要です。スタイル、色、雰囲気を指定することで、AIが一貫性のある正確な描写を生成します。"/>
                    <PromptCard title="レベルに合わせた概念説明" description="具体的な対象（高校生）を設定することで、回答の複雑さと言葉のレベルが調整されます。異なる専門レベルに応じた内容の調整に役立ちます。"/>
                    <PromptCard title="比較分析のリクエスト" description="比較分析を指示することで、対比を明確にした情報の整理が促されます。このようなプロンプトは、複雑なトピックの分析に有効です。"/>

                </div>
            </div>

            <div style={{height:"64px"}}></div>
        </div>
    );
}

export default HomePage;