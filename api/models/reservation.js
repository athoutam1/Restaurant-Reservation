var mongoose = require("mongoose");

var reservationSchema = new mongoose.Schema({
  name: String,
  phone: String,
  email: String
});
var Reservation = mongoose.model("Reservation", reservationSchema);

module.exports.model = Reservation;
module.exports.schema = reservationSchema;
