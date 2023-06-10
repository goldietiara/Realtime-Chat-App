const express = require("express");
const cors = require("cors");
const { default: axios } = require("axios");

//to call the server form any other origin
const app = express();
app.use(express.json());
app.use(cors({ origin: true }));

//Get or Create user object in our chat ensigne database
app.post("/authenticate", async (req, res) => {
  const { username } = req.body;

  //private API calls
  try {
    const r = await axios.put(
      "https://api.chatengine.io/users/",
      { username: username, secret: username, fristname: username },
      { headers: { "private-key": "97042a56-8cac-4fd7-8ae4-a12fbbb4def2" } }
    );
    return res.status(r.status).json(r.data);
  } catch (e) {
    return res.status(e.response.status).json(e.response.data);
  }
});

app.listen(3001);
