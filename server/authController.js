import {Member} from './model.js'
import bcrypt from 'bcryptjs'

export default {
    register: async (req, res) => {
        console.log('register')
        try {
            const {email, password} = req.body
            const member = await Member.findOne({where: {email}})
            if(member){
                res.status(400).send('That email is already taken.')
            } else {
                const salt = bcrypt.genSaltSync(10)              
                const newMember = await Member.create({email, password: bcrypt.hashSync(password, salt)})
                console.log(newMember)
                req.session.user = {
                    userId: newMember.email,
                    name: newMember.firstName + " " + newMember.lastName
                }
                res.status(200).send(req.session.user)
            }

        } catch(err){
            console.log(err)
            res.sendStatus(500)
        }
    },
    login: async (req, res) => {
        console.log('login')
        try {
            const {email, password} = req.body 

            const user = await Member.findOne({where: {email}})

            if(!user){
                res.status(400).send('There was no user found with that email.')
            } else {
                const isAuthenticated = bcrypt.compareSync(password, Person.password)

                if(isAuthenticated){
                    req.session.user = {
                        userId: user.email,
                        name: user.firstName + " " + user.lastName
                    }

                    res.status(200).send(req.session.user)
                } else {
                    res.status(401).send('That password is incorrect.')
                }
            }
        } catch (err){
            console.log(err)
            res.sendStatus(500)
        }

    },
    checkUser: async (req, res) => {
        console.log('checkUser')
        if(req.session.user){
            res.status(200).send(req.session.user)
        } else {
            res.status(400).send('There is no user on the session')
        }
    },
    logout: async (req, res) => {
        console.log('logout')
        req.session.destroy()
        res.sendStatus(200)
    }
}