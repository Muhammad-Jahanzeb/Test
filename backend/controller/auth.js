const bcrypt = require('bcrypt')

const registerUser = async (req,res) => {
    const {user_name, email,pwd} = req.body

    hashedPassword = await bcrypt.hash(pwd, 10)

    const user ={
        userName : user_name,
        password: hashedPassword
    }
}