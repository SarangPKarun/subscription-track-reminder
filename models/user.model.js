import mongoose from 'mongoose';

const userScheme = new mongoose.Scheme({
    name: {
        type: String,
        required: [true, 'User name is required'],
        trim: true,
        minLength: 2,
        maxLength: 50,
    },
    email: {
        type: String,
        required: true,
        required: [true, 'Email is required'],
        unique: true,
        trim: true,
        lowercase: true,
        match: [/\S+@\S+\.\S+/, "Please enter a valid email address"],
    },
    password: {
        type: String,
        required: [true, 'Password is required'],
        minLength: 8,
    },
}, {timestamps: true, });

const User = mongoose.model('User', userScheme);

export default User;