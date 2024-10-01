function App() {
  return (
  <>
    <header>
      <h1 className="title">WikiReact</h1>
      <img src="src/assets/react.svg" className="react" />
      <input type="search" className="searchBar" placeholder="ძიება ვიკიპედია"/>
      <div className="linksDiv">
        <a className="links">შემოწირულობები</a>
        <a className="links">ანგარიშის შექმნა</a>
        <a className="links">შესვლა</a>
      </div>
    </header>
    <main>
      <div className="titleDiv"><p className="context">სტატია</p></div>
      <article>
        <div className="aboutInfoDiv">
          <h1>არაჩვეულებრივი გამოფენა</h1>
          <p>ნიჭიერი მოქანდაკე აგული ერისთავი იძულებულია სარფიან საქმეს მოჰკიდოს ხელი და თავისდაშეუმჩნევლად სასაფლაოს ხელოსნად გადაიქცევა. წვრილშვილიანი ოჯახი უნებურად უბიძგებს მას ამ გზაზე. დინებას მიყოლილი, ფიქრისგან დაცლილი ყოველდღიურობა ერთ დღეს აუტანელი შეიქნება და აგული აჯანყდება, თუმც ეს ჯანყი ჭიქა წყალში ქარიშხალს ჰგავს. იგი უკვე ხაფანგშია გამომწყვდეული და მნიშვნელოვანს ვეღარაფერს შექმნის.</p>
        </div>
        <section>
          <section className="innerSection">
            <img src="src/assets/არაჩვეულებრივი_გამოფენა.jpg"/>
            <p>გამოსვლის თარიღი: 1968</p>
          </section>
        </section>
      </article>
    </main>
  </>
  )
}

export default App
