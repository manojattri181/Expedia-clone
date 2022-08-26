// const mongoose = require("mongoose");

// const connect = () => {
//   return mongoose.connect("mongodb://127.0.0.1:27017/unit5", {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   });
// };

// module.exports = connect;
const mongoose = require("mongoose");

require("dotenv").config();
// console.log(process.env.mongo_url)

module.exports = () => {
  return mongoose.connect(
    process.env.mongo_url ,
    {useNewUrlParser: true,useUnifiedTopology: true,}
  );
};
