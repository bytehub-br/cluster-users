const Joi = require('@hapi/joi')

module.exports = {
  async create (req, res, next) {
    const schema = Joi.object({
      name: Joi.object({
        first: Joi.string().trim()
          .lowercase()
          .alphanum()
          .min(3)
          .max(30)
          .required(),
        last: Joi.string().trim()
          .lowercase()
          .alphanum()
          .min(3)
          .max(30)
          .required()
      }).required(),
      email: Joi.string().email().lowercase().trim().required(),
      confirm_email: Joi.ref('email'),
      phone: Joi.object({
        countryCode: Joi.string().lowercase().trim().required().required(),
        number: Joi.string().lowercase().trim().required()
      }).required(),
      age: Joi.object({
        birthday: Joi.date().required(),
        old: Joi.number().integer().greater(17).required()
      }).required(),
      birthplace: Joi.object({
        country: Joi.string().lowercase().trim().required(),
        countryCode: Joi.string().lowercase().trim().required(),
        state: Joi.string().lowercase().trim(),
        stateCode: Joi.string().lowercase().trim(),
        city: Joi.string().lowercase().trim().required()
      }).required(),
      homeland: Joi.object({
        country: Joi.string().lowercase().trim().required(),
        countryCode: Joi.string().lowercase().trim().required(),
        state: Joi.string().lowercase().trim(),
        stateCode: Joi.string().lowercase().trim(),
        city: Joi.string().lowercase().trim().required()
      }).required(),

      languages: Joi.object({
        motherlanguage: Joi.string().lowercase().trim().required(),
        spoken: Joi.array().items(Joi.string().lowercase().trim())
      }).required(),
      interests: Joi.object({
        keywords: Joi.array().items(Joi.string().lowercase().trim()),
        sentence: Joi.string().lowercase().trim()
      }),
      pictures: Joi.array().items(Joi.string().lowercase().trim()),
      placesBeen: Joi.array().items(
        Joi.object({
          country: Joi.string().lowercase().trim(),
          countryCode: Joi.string().lowercase().trim(),
          state: Joi.string().lowercase().trim(),
          stateCode: Joi.string().lowercase().trim(),
          city: Joi.string().lowercase().trim()
        })
      )

      /* password: Joi.string().trim()
        .pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')),

      repeat_password: Joi.ref('password'),

      access_token: [
        Joi.string().trim(),
        Joi.number()
      ],

      birth_year: Joi.number()
        .integer()
        .min(1900)
        .max(2013),

      email: Joi.string().trim()
        .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } })
    })
      .with('password', 'repeat_password')
    */
    })

      .with('email', 'confirm_email')

    try {
      await schema.validateAsync(req.body)
      next()
    } catch (error) {
      return res.status(400).json({ success: false, error })
    }
  },

  async update (req, res, next) {
    const schema = Joi.object({
      name: Joi.object({
        first: Joi.string().trim()
          .lowercase()
          .alphanum()
          .min(3)
          .max(30),
        last: Joi.string().trim()
          .lowercase()
          .alphanum()
          .min(3)
          .max(30)

      }),
      email: Joi.string().email().lowercase().trim(),
      confirm_email: Joi.ref('email'),
      phone: Joi.object({
        countryCode: Joi.string().lowercase().trim(),
        number: Joi.string().lowercase().alphanum().trim()
      }),
      age: Joi.object({
        birthday: Joi.date(),
        old: Joi.number().integer().greater(17)
      }),
      birthplace: Joi.object({
        country: Joi.string().lowercase().trim(),
        countryCode: Joi.string().lowercase().trim(),
        state: Joi.string().lowercase().trim(),
        stateCode: Joi.string().lowercase().trim(),
        city: Joi.string().lowercase().trim()
      }),
      homeland: Joi.object({
        country: Joi.string().lowercase().trim(),
        countryCode: Joi.string().lowercase().trim(),
        state: Joi.string().lowercase().trim(),
        stateCode: Joi.string().lowercase().trim(),
        city: Joi.string().lowercase().trim()
      }),

      languages: Joi.object({
        motherlanguage: Joi.string().lowercase().trim(),
        spoken: Joi.array().items(Joi.string().lowercase().trim())
      }),
      interests: Joi.object({
        keywords: Joi.array().items(Joi.string().lowercase().trim()),
        sentence: Joi.string().lowercase().trim()
      }),
      pictures: Joi.array().items(Joi.string().lowercase().trim()),
      placesBeen: Joi.array().items(
        Joi.object({
          country: Joi.string().lowercase().trim(),
          countryCode: Joi.string().lowercase().trim(),
          state: Joi.string().lowercase().trim(),
          stateCode: Joi.string().lowercase().trim(),
          city: Joi.string().lowercase().trim()
        })
      )

    })

      .with('email', 'confirm_email')

    try {
      await schema.validateAsync(req.body)
      next()
    } catch (error) {
      return res.status(400).json({ success: false, error })
    }
  }
}
