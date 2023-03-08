import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import crypto from 'crypto'

export const checkInput = async (fields) => {
    for (const el in fields) {
        if (!fields[el]) return `Please provide your ${el}`
    }
    return null
}
export const checkPassword = async (password, hashedPassword) => {
    const check = await bcrypt.compare(password, hashedPassword)
    return check
}

export const checkPasswordChange = function (passwordChangedAt, JWTTimestamp) {
    if (passwordChangedAt) {
        const changedTimestamp = parseInt(passwordChangedAt.getTime() / 1000, 10)
        return JWTTimestamp < changedTimestamp
    }
    return false
}

export const createPasswordResetToken = async function () {
    const resetToken = crypto.randomBytes(32).toString("hex")
    const passwordResetToken = crypto.createHash("sha256").update(resetToken).digest("hex")
    const passwordResetExpires = Date.now() + 10 * 60 * 1000

    return { resetToken, passwordResetToken, passwordResetExpires }
}

export const createJWT = (userId) => jwt.sign(
    { userId },
    process.env.JWT_SECRET,
    { expiresIn: process.env.JWT_LIFETIME }
)

export const createRefreshJWT = (userId) => jwt.sign(
    { userId },
    process.env.JWT_REFRESH_SECRET,
    { expiresIn: process.env.JWT_REFRESH_LIFETIME }
)