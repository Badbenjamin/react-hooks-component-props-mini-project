function Article({ posts }) {
    console.log(posts)
    const eachPost = posts.map(post => {
        return (
            <>
                <h3>{post.title}</h3>
                <small>{post.date}</small>
                <p>{post.preview}</p>
            </>
        )
    })

    return (
        <article>{eachPost}</article>
    )
}

export default Article