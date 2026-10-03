function Home({ user }) {
  return (
    <>
      <h1>Home Page</h1>
      
      {user ? (
        <p>You are logged in as {user.name}.</p>
      ) : (
        <p>Please login!</p>
      )}
    </>
  )
}

export default Home;
