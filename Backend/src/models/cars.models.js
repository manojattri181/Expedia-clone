const mongoose = require("mongoose");

const carsSchema = new mongoose.Schema(
  {
    type: { type: String, required: true },
    name:{ type: String, required: true },
    city: { type: String, required: true },
    image: { type: String, required: true },
    price:{ type: String, required: true },
    amenities: {
      passangers: { type: Boolean, required: true },
      doors: { type: Boolean, required: true },
      millage: { type: Boolean, required: true },
      Airconditioning: { type: Boolean, required: true },
      fuelInfo: { type: Boolean, required: true },
      manual: { type: Boolean, required: true },
    },
    cancellation:{ type: Boolean, required: true },
   
    location: {
      
       map: { type: String, required: true },
     
    }
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

module.exports = mongoose.model("cars", carsSchema);
