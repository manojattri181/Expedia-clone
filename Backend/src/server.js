const app = require("./index.js");
const {connection} = require("./configs/db.js");
let port = process.env.PORT || 5000;

app.listen(port, async ()=> {
  try {
    await connection;
     console.log(`Connected to data base success fully`);
  } catch (err) {
    console.error(err.message);
  }
  console.log(`listening on port ${port}`);
});
