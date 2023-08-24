import connectMongo from "@/database/connection";
import Users from "../../../model/Schema"
import { hash } from "bcryptjs";
export default async function handler(req, res) {
    // res.json({message:"Signup Post Request"})
    connectMongo().catch(error => res.json({ error: "Connection Failed!" }))

    //post method
    if (req.method === "POST") {
        if (!req.body) {
            return res.status(400).json({ error: "User not found" })

        }
        const { name, email, password } = req.body

        //existing user
        const existingUser = await Users.findOne({ email })
        if (existingUser) {
            return res.status(422).json({ error: "User Already Exists" })
        }
        //hash password
        Users.create({ name, email, password: await hash(password, 12) }, function (err, data) {
            if (err) {
                return res.status(400).json({ error: "User does not create" })
            }

          return  res.status(200).json({ status: true, user: data })

        })

    //  const data= Users.create({ name, email, password: await hash(password, 12)})
    //  if(data){
    //     return res.status(200).json({ status: true, user: data })
    //  }
    }
    else {
        res.status(400).json({ error: "POST has not been done" })
    }
} 