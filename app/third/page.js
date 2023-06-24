const fetchData = () => {
    return fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    
}

export default async function third () {
    const posts = await fetchData()
    
    console.log("****", posts)

    const animeStyles = {
        backgroundColor: "black",
        color: "white"
    }

    return (
       <section>
         {posts.map(post => (
            <article key={post.id}>
            
            <section style={animeStyles}   >
            
            <h4>Title: {post.title}</h4>
            <h4>{post.body}</h4>
            </section>
            </article>
        ))}
       </section>
    )
}
