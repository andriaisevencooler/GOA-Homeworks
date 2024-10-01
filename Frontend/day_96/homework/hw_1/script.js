/*
Task 1: ობიექტის შექმნა და მანიპულაცია:
1 შექმენი person ობიექტი, რომელსაც ექნება firstName, lastName, age და address (adressში უნდა შექმნათ კიდევ ერთ ობიექტი რომელშიც იქნება street, city, country).
2. შეუცვალეთ age-ს და country-ს მნიშვნელობა.
3. person ობიექტში დაამატეთ email.
4. წაშალე country თვისება address ობიექტიდან.
*/

let person =  {
    firstName: "Andria",
    lastName: "Gaduashvili",
    age: 12,
    address: {
        street: "Street",
        city: "Tbilisi",
        country: "Greece"
    }
}

person.age = 13;
person.address.country = "Georgia";
person.email = 'andriagaduashvili41@gmail.com'

delete person.address.country

console.log(person)