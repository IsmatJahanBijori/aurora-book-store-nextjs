// import connectMongo from "../../../database/connection";
// import Users from "../../../model/User"
// import { hash } from "bcryptjs";
// export default async function handler(req, res) {
//     // res.json({message:"Signup Post Request"})
//     connectMongo().catch(error => res.json({ error: "Connection Failed!" }))



//     //post method
//     if (req.method === "POST") {
//         if (!req.body) return res.status(404).json({ error: "User not found" })

        
//         const { name, email, password } = req.body

//         //existing user
//         const existingUser = await Users.findOne({ email })
//         if (existingUser) return res.status(422).json({ error: "User Already Exists" })

//         //hash password
//         Users.create({ name, email, password: await hash(password, 12) }, function (err, data) {
//             if (err) return res.status(404).json({ error: "User does not create" })
            
//             res.status(201).json({ status: true, user: data })

//         })

//     //  const data= Users.create({ name, email, password: await hash(password, 12)})
//     //  if(data){
//     //     return res.status(200).json({ status: true, user: data })
//     //  }
//     }
//     else {
//         res.status(500).json({ error: "POST has not been done" })
//     }
// } 
// // nextauth er video theke


import User from "../../../model/User"
import connectDB from "../../../database/connection"

const handler = async (req, res) => {
    if (req.method === "POST") {
        console.log(req.body)
        let us=new User(req.body)
        us.save()
        res.status(200).json({ success: "success" })
    }
    else {
        res.status(400).json({ error: "error" })
    }
}

export default connectDB(handler)

