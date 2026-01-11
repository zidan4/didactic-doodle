
import express from "express";

const app = express();
app.use(express.json()):

//put updates every row in the database
app.put("users", (req, res) => {
  const { body, params:{id} } = req;
  const parsedId = parseInt(id)
  if(isNaN){
    return res.sendStatus(400);
  };
  const foundUserIndex = users.findIndex( user => { user.id === id });
  if(foundUserIndex === -1 ) {
    return res.sendStatus(400);
  };
  users[foundUserIndex] = { id: parsedId, ...body }
  return res.status(200);
});

//app.patch updates the database partially
app.patch("user", (req, res) => {
  const { body, params:{id} } = req;
  
});

const port = process.env.PORT || 3000;
app.listen( port, (req, res) => {
  console.log("done")
});
