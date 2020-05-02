const express = require("express");
const members = require("./Members");
const logger = require("./logger");
const app = express();
const PORT = process.env.PORT || 8080;
app.use(logger);

app.get("/", (req, resp) => {
  resp.send("Hello World!!");
});

app.get("/members", (req, resp) => {
  resp.send(members);
});

app.get("/members/:name", (req, resp) => {
  const member = members.some((member) => member.firstName === req.params.name);

  if (member) {
    console.log("member found");
    resp.send(member);
  } else {
    resp
      .status(404)
      .json({ message: `No member found for name: ${req.params.name}` });
  }
});

app.listen(PORT, () => {
  console.log("Server is up and running on port " + PORT);
});
