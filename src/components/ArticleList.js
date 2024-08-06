import Article from "./Article"

function ArticleList({ posts }) {

    const eachPost = posts.map(post => {
        // console.log(post.title)
       return <Article key={post.id} title={post.title} preview={post.preview} minutes={post.minutes} date={post.date}/>
    })

    return (
        <main>
            {eachPost}
        </main>
    )
}

export default ArticleList