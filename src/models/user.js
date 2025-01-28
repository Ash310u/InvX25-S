import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        unique: true,
        required: [true, 'Username is required'],
        trim: true,
        lowercase: true,
        minlength: [2, 'Username must be at least 1 characters long'],
    },
    name: {
        type: String,
        required: true,
        trim: true,
        minlength: [1, 'Username must be at least 1 characters long'],
    },
    email: {
        type: String,
        lowercase: true,
        required: [true, 'Email is required'],
        unique: true,
        trim: true,
        validate: {
            validator: (value) => {
                // Validating Email using Regex
                return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
            },
            message: 'Email is invalid'
        }
    },
    password: {
        type: String,
        required: [true, 'Password is required'],
        trim: true,
        minlength: [8, 'Password must be at least 8 characters long'],
        validate: {
            validator: (value) => !value.toLowerCase().includes("password"),
            message: 'Password cannot contain the word "password".'
        }
    },
    token: [{
        token: {
            type: String,
            required: [true, 'Please Authenticate'],
        }
    }]
}, {
    timestamps: true,
}
);

const User = mongoose.model('User', userSchema);

export default User;