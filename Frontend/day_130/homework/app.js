import express from "express"

const app = express()
const PORT = 3000

app.get("/user", (req, res) => {
    res.json({
        message: "User endpoint",
        data: {
            id: 1,
            name: "Andria"
        }
    })
})

app.get("/filmdata", (req, res) => {
    res.json({
        message: "film data endpoint",
        data: {
            director: "James Cameron",
            name: "Avatar"
        }
    })
})

app.get("/currentuser", (req, res) => {
    res.json({
        message: "current user endpoint",
        data: {
            id: 2,
            name: "current_user"
        }
    })
})

app.get("/groupdata", (req, res) => {
    res.json({
        message: "group data endpoint",
        data: {
            name: "Admins",
            members: 3
        }
    })
})

app.get("/familydata", (req, res) => {
    res.json({
        message: "family data endpoint",
        data: {
            name: "Family1",
            members: ["John", "Jane", "Joe"]
        }
    })
})

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});