import React from "react"
import Article from "./Article.js"

function ArticleList(props) {
    return (
        <main>
            { props.posts.map(x => <Article key={props.id} title={x.title} date={x.date} preview={x.preview} />)}
        </main>
    )
}

export default ArticleList;