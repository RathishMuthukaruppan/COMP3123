const express = require('express');
const fs = require('fs');
const app = express();
const router = express.Router();


app.use(express.json()); 
router.get('/home', (req, res) => {
  res.sendFile(__dirname + '/home.html');
});

router.get('/profile', (req, res) => {
  fs.readFile('user.json', 'utf8', (err, data) => {
    if (err) {
      return res.status(500).json({ error: 'Failed to read user data' });
    }
    res.json(JSON.parse(data));
  });
});

router.post('/login', (req, res) => {
  const { username, password } = req.body;

  fs.readFile('user.json', 'utf8', (err, data) => {
    if (err) {
      return res.status(500).json({ error: 'Failed to read user data' });
    }

    const user = JSON.parse(data);
    
    if (user.username !== username) {
      return res.json({
        status: false,
        message: "User Name is invalid"
      });
    }

    if (user.password !== password) {
      return res.json({
        status: false,
        message: "Password is invalid"
      });
    }

    return res.json({
      status: true,
      message: "User Is valid"
    });
  });
});

router.get('/logout/:username', (req, res) => {
  const { username } = req.params;
  res.send(`<b>${username} successfully logged out.</b>`);
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Server Error');
});

app.use('/', router);

const PORT = process.env.PORT || 8081;
app.listen(PORT, () => {
  console.log('Web Server is listening at port ' + PORT);
});
