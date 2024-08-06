import Article from "./Article"

function ArticleList({ posts }) {
    console.log(posts)
    return (
        <main>
            <Article posts={posts} />
        </main>
    )
}

export default ArticleList