import mongoose from 'mongoose'

const registerSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Please enter your name'],
    },
    email: {
      type: String,
      required: [true, 'Please enter your email'],
    },
    password: {
      type: String,
      required: [true, 'Please enter your password'],
    },
  },
  { timestamps: true },
)

const Register = mongoose.models.Register || mongoose.model('Register', registerSchema)

export default Register
