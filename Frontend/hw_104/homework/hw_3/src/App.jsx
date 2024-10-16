import linux from './assets/linux.png'

const App = () => {
  return (
    <div id="container">
      <h1>Linux</h1>
      <p>ლინუქსი (Linux) — მრავალფუნქციონალური მძლავრი თავისუფალი საოპერაციო სისტემა, რომელიც იუნიქსის მაგვარი საოპერაციო სისტემების ერთ-ერთი ნაირსახეობაა. საოპერაციო სისტემა იუნიქსი (UNIX) შეიქმნა სამოციან წლებში, კვლევისა და განვითარების ორგანიზაცია ბელ ლაბსში (Bell Labs, ამჟამად Bell Laboratories), AT&T-ს თანამშრომლების ჯგუფის მიერ.

      UNIX-ის შექმნისას გათვალისწინებული იქნა მისი მულტიპლატფორუმულ საოპერაციო სისტემად ჩამოყალიბება, ანუ უნდა ყოფილიყო შესაძლებელი მისი სხვადასხვა არქიტექტურის მანქანებზე უპრობლემოდ მუშაობა. სწორედ მისმა მულტიპლატფორმულობამ განაპირობა UNIX-ის უდიდესი პოპულარულობა. UNIX-ის პოპულარულობასთან ერთად სხვადასხვა კომპანიებმა დაიწყეს UNIX-ის ბაზაზე საოპერაციო სისტემების შექმნა.</p>
      <img src={linux} alt="" />
    </div>
  )
}

export default App