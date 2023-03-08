import { getAuth } from 'firebase-admin/auth'
export const authorizeMiddleware = async (req, res, next) => {
    const authHeader = req.headers.authorization
    if (!authHeader || !authHeader.startsWith('Bearer')) {
        return res.status(401).send('Unauthorization')
    }
    const token = authHeader.split(' ')[1]
    getAuth().verifyIdToken(token).then(decodedToken => { req.uid = decodedToken.uid; next() }).catch(err => res.status(403).send('Forbidden'))
}