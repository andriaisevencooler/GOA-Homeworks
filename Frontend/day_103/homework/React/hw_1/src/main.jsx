import { createRoot } from 'react-dom/client'
import './style.css'

createRoot(document.getElementById('root')).render(
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
          <h1>ზღვის კუ (Chelonioidea)</h1>
          <p>ზღვის კუები (ლათ. Chelonioidea), კუების რიგი. შეიცავს 1 ოჯახს საკუთრივ ზღვის კუსებრნს (Cheliniidae). მოზრდილი ცხოველებია, მთელ სიცოცხლეს წყალში ატარებენ. ხმელეთზე ამოდიან მხოლოდ კვერცხის დასადებად. დაბალი ჯავშანი აქვთ. თავის მთლიანად შეწევა ჯავშანში არ შეუძლიათ. კიდურები ფარფლებადაა ქცეული. წინა კიდურები გრძელია. მუცლის ფარი ზურგის ფარისაგან გამოყოფილია. გავრცელებული არიან ტროპიკულ და სუბტროპიკულ ზღვეებში, იშვიათად ზომიერ სარტყელში. არსებობს 4 გვარის თითო სახეობა. ზღვის კუები ასეულ კმ გადიან საკვებისა და გამრავლებისათვის ხელსაყრელი ადგილებისაკენ. დებენ რამდენიმე ათეულიდან 200-მდე და ზოგჯერ მეტ კვერცხს. მწვანე კუ (Chelonia mydas) — ყველაზე დიდია. მათი ჯავშნის სიგრძე 1,4 მ აღწევს, წონა 400 კგ-მდე. იკვებება წყალმცენარეებით. აქვს გემრიელი ხორცი და კვერცხი.</p>
        </div>
        <section>
          <section className="innerSection">
            <img src="src/assets/turtle.jpg"/>
            <p>ზღვის კუ (Chelonioidea)</p>
            <p>კლასი: ქვეწარმავალი</p>
            <p>ჯგუფი: ცხოველები</p>
          </section>
        </section>
      </article>
    </main>
  </>
)
