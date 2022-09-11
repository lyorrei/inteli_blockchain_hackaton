import jwt from 'jsonwebtoken'

export default async function handler(req, res) {
    // Criptografar a informação
    const hashedName = jwt.sign(
        { name: req.body.name },
        process.env.JWT_INFO_SECRET
    )
    const hashedNumber = jwt.sign(
        { name: req.body.number },
        process.env.JWT_INFO_SECRET
    )

    res.status(200).json({ hashedName, hashedNumber })
}


