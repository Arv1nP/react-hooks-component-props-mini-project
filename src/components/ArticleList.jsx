import Article from "./Article"
import TimeFeature from "./TimeFeature"

export default function ArticleList({data}){
    const articles = data.map((article)=>
    <div  key ={article.id}>
    <Article
    title = {article.title}
    date = {article.date}
    time = {article.minutes}
    />
    <TimeFeature minutes={article.minutes}/>
    </div>)
    return(
        <main>
            {articles}
        </main>
    )
}