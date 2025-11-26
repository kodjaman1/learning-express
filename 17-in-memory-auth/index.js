import express from 'express';
import bodyParser from 'body-parser';

const app = express();
const PORT = 3031;

function passwordIsValid(username, password) {
  return users[username] && users[username] === password;
}

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(express.json());


app.get('/', (req, res) => {
  res.render('index.ejs');
});

app.post("/login", (req, res) => {
  const { username, password } = req.body;
  if (passwordIsValid(username, password)) {
    res.send(`Welcome ${username}!`);
  } else {
    res.render('index.ejs', { header: 'Invalid username or password.' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});


var users = {
  'user1': 'password1',
  'user2': 'password2'
};

