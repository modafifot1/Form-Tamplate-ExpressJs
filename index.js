require('dotenv').config();
const express = require('express');
const app = express();
app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true }));

app.set("view engine","pug");
app.set("views", "./views")
function getContactPage(message) {
  return message ? `p${message}` : "p";
  
}
app.get('/contact', (req, res) => res.render("index",{
  messages:getContactPage()
}));
app.post('/contact', (req, res) => {
  console.log('receiving post request', req.body);
  res.render("index", {
    messages:getContactPage("Form have been sent!")
  });
});
const port = process.env.PORT;
app.listen(port, () => console.log(`Example app listening on port ${port}!`));