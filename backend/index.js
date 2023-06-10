const express = require("express");
const cors = require("cors");
const { default: axios } = require("axios");

//to call the server form any other origin
const app = express();
app.use(express.json());
app.use(cors({ origin: true }));

app.post("/authenticate", async (req, res) => {
  const { username } = req.body;

  //Get or Create Chat
  try {
    const r = await axios.put("https://api.chatengine.io/chats/");
    {
      username: username;
      secret: username;
      fristname: username;
    }
    {
      Headers: {
        ("private-key: 97042a56-8cac-4fd7-8ae4-a12fbbb4def2");
      }
    }
  } catch (e) {}

  return res.json({ username: username, secret: "sha256..." });
});

app.listen(3001);
