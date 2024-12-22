require ('dotenv').config


const express = require('express')
const app = express()
const port = 5000
const githubData = {
  "login": "Harshchafle",
  "id": 157059028,
  "node_id": "U_kgDOCVyH1A",
  "avatar_url": "https://avatars.githubusercontent.com/u/157059028?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/Harshchafle",
  "html_url": "https://github.com/Harshchafle",
  "followers_url": "https://api.github.com/users/Harshchafle/followers",
  "following_url": "https://api.github.com/users/Harshchafle/following{/other_user}",
  "gists_url": "https://api.github.com/users/Harshchafle/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/Harshchafle/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/Harshchafle/subscriptions",
  "organizations_url": "https://api.github.com/users/Harshchafle/orgs",
  "repos_url": "https://api.github.com/users/Harshchafle/repos",
  "events_url": "https://api.github.com/users/Harshchafle/events{/privacy}",
  "received_events_url": "https://api.github.com/users/Harshchafle/received_events",
  "type": "User",
  "user_view_type": "public",
  "site_admin": false,
  "name": "Harsh Chafle",
  "company": null,
  "blog": "",
  "location": "Nagpur, Maharashtra, India",
  "email": null,
  "hireable": null,
  "bio": "👨‍💻 Welcome to my coding journey! 🚀\r\n🌟 I'm a passionate Software Developer driven by curiosity and a thirst for knowledge. 📚",
  "twitter_username": null,
  "public_repos": 21,
  "public_gists": 0,
  "followers": 18,
  "following": 18,
  "created_at": "2024-01-18T19:07:18Z",
  "updated_at": "2024-12-22T12:58:38Z"
}

app.get('/', (req, res) =>{
    res.send('Hello World')
})

app.get('/twitter', (req, res) => {
    res.send("This is twitter Page")
})

app.get('/login', (req, res) => {
    res.send("this is login Page")
})

app.get('/github', (req, res) => {
    res.json(githubData)
})

// app.listen
app.listen(process.env.PORT, () => {
    console.log(`App Listening on port ${port}`)
})