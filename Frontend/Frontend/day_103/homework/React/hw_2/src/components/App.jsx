function App() {

  return (
    <>
      <header>
        <p>Cover Image</p>
        <p>✖</p>
      </header>

      <main>
        <img src="src/assets/sunflower.png" />
        <article>
          <p>Accepted formats: PNG, GIF or JPG. Maximum file size is 2.0MB</p>
          <div className="flex-container">
            <button>Upload new photo</button>
            <p>or</p>
            <button>Delete</button>
          </div>
        </article>
      </main>
      <footer>
        <button className="options">Cancel</button>
        <button className="options">Save</button>
      </footer>
    </>
  )
}

export default App
