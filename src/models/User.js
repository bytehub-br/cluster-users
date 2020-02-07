const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
  name: {
    first: { type: String, trim: true, required: true, lowercase: true },
    last: { type: String, trim: true, required: true, lowercase: true }
  },
  email: { type: String, trim: true, required: true, lowercase: true },
  phone: {
    countryCode: { type: String, trim: true, required: true },
    number: { type: String, trim: true, required: true }
  },
  age: {
    birthday: { type: Date, required: true },
    old: { type: Number, required: true }
  },
  birthplace: {
    country: { type: String, trim: true, required: true, lowercase: true },
    countryCode: { type: String, trim: true, required: true, lowercase: true },
    state: { type: String, trim: true, lowercase: true },
    stateCode: { type: String, trim: true, lowercase: true },
    city: { type: String, trim: true, required: true, lowercase: true }
  },
  homeland: {
    country: { type: String, trim: true, required: true, lowercase: true },
    countryCode: { type: String, trim: true, required: true, lowercase: true },
    state: { type: String, trim: true, lowercase: true },
    stateCode: { type: String, trim: true, lowercase: true },
    city: { type: String, trim: true, required: true, lowercase: true }
  },
  languages: {
    motherlanguage: { type: String, trim: true, required: true, lowercase: true },
    spoken: [{ type: String, trim: true, lowercase: true }]
  },
  interests: {
    keywords: [{ type: String, trim: true, lowercase: true }],
    sentences: [{ type: String, trim: true, lowercase: true }]
  },
  pictures: [{ type: String }],
  placesBeen: [
    {
      country: { type: String, trim: true, lowercase: true },
      countryCode: { type: String, trim: true, lowercase: true },
      state: { type: String, trim: true, lowercase: true },
      stateCode: { type: String, trim: true, lowercase: true },
      city: { type: String, trim: true, lowercase: true }
    }
  ]

})

module.exports = mongoose.model('User', UserSchema)
