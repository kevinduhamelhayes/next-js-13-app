const fetchPosts = () => {
  return fetch("https://jsonplaceholder.typicode.com/posts", {
    cache: "no-store",
  }).then((response) => response.json())
}
// getStaticProps
// return fetch("https://jsonplaceholder.typicode.com/posts").then((response) => response.json())
// getServerSideProps
// return fetch("https://jsonplaceholder.typicode.com/posts", { cache: "no-store" }).then((response) => response.json())
// incremental static regeneration
// return fetch("https://jsonplaceholder.typicode.com/posts", {next: {revalidate: 60}}).then((response) => response.json())
 
export default async function PostsPage({ params }) {
  const posts = await fetchPosts()
  return (
    <section>
      {posts.slice(0, 5).map((post) => (
        <article key={post.id}>
          <h1 className="text-2xl">{post.title}</h1>
          <p>{post.body}</p>
        </article>
      ))}
    </section>
  )
}
