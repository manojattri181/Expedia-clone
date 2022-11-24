const mongoose = require("mongoose");

const staysSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    city: { type: String, required: true },
    images: [
      {
        src: { type: String, required: true },
      },
    ],
    rooms: [
      {
        name: { type: String, required: true },
        size: { type: String, required: true },
        bedSize: { type: String, required: true },
        policy: { type: String, required: true },
        poepleSleeps: { type: String, required: true },
        price: { type: String, required: true },
      },
    ],
    amenities: {
      all: { type: Boolean, required: false },
      dinner: { type: Boolean, required: false },
      lunch: { type: Boolean, required: false },
      breakFast: { type: Boolean, required: false },
      Pool: { type: Boolean, required: true },
      FreeWiFi: { type: Boolean, required: true },
      Parkingincluded: { type: Boolean, required: true },
      Airconditioning: { type: Boolean, required: true },
      Spa: { type: Boolean, required: true },
      Restaurant: { type: Boolean, required: true },
    },
    map: { type: String, required: true },
    aboutArea: {
      title: { type: String, required: true },
      place: { type: String, required: true },
      desc: { type: String, required: true },
    },
    aboutProperty: {
      title: { type: String, required: true },
      subTitle: { type: String, required: true },
      desc: { type: String, required: true },
      languages: {
        English: { type: Boolean, required: true },
        German: { type: Boolean, required: false },
        Hindi: { type: Boolean, required: true },
      },
    },
    policies: {
      CheckIn: {
        from: { type: String, required: true },
        early: { type: String, required: true },
        express: { type: String, required: true },
        minAge: { type: String, required: true },
      },
      CheckOut: {
        before: { type: String, required: true },
        early: { type: String, required: true },
        express: { type: String, required: true },
      },
      paymentType: {
        americanExpress: { type: Boolean, required: true },
        masterCard: { type: Boolean, required: true },
        visa: { type: Boolean, required: true },
      },
    },
    price: { type: String, required: true },
    rating: { type: String, required: true },
    reviews: { type: String, required: true },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);
const Stays = mongoose.model("stays", staysSchema);
module.exports = Stays;
