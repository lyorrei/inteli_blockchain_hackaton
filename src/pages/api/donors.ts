import jwt from 'jsonwebtoken'

export default async function handler(req, res) {
    // Criptografar a informação
    const decoded: any = await jwt.verify(req.body.hashedName, process.env.JWT_INFO_SECRET)

    res.status(200).json({ name: decoded.name })
}


