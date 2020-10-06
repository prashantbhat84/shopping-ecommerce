import mongoose from 'mongoose'
import bcrypt from 'bcryptjs';

const UserSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    isAdmin: {
        type: Boolean,
        required: true,
        default: false
    }
}, {
    timestamps: true
});

UserSchema.methods.matchPassword = async function (enteredPassword) {
    const comparepassword = await bcrypt.compare(enteredPassword, this.password)

    return comparepassword;
}

const User = mongoose.model("User", UserSchema);
export default User;

