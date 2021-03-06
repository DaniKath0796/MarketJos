import jwt from 'jsonwebtoken'

export const CreateAccessToken = (payload) => {
    console.log(process.env.ACCESS_TOKEN_SECRET)
    return jwt.sign(payload, process.env.ACCESS_TOKEN_SECRET, {expiresIn: '15m'})
}

export const CreateRefreshToken = (payload) => {
    return jwt.sign(payload, process.env.REFRESH_TOKEN_SECRET, {expiresIn: '7d'})
}