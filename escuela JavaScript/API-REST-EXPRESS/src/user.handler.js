const Users = require('./user.model.js');

const User = {
    list: async (req,res)=>{
        const users = await Users.find();
        res.status(200).send(users);
    },
    //crear un registro 
    //obtner lo que el cliente va a envir mediante el request
    create: async (req,res) =>{
        const user = new Users(req.body)
        const saveUser = await user.save()
        res.status(201).send(saveUser._id)
    },

    get: async (req,res) =>{
        const {id} = req.params 
        const user = await Users.findOne({_id: id})
        res.status(200).send(user)
    },

    update: async (req,res) =>{
        //obtener el id
        const {id} = req.params 
        const user = await Users.findOne({_id: id})
        
        //actualizar los datos con Object.assing
        Object.assign(user, req.body)
        await user.save()
        res.sendStatus(204)
    },

    delete: async (req,res) =>{
        //obtener el id
        const {id} = req.params 
        const user = await Users.findOne({_id: id})
        
        //eliminar dato
        if(user){
            user.remove()
        }

        res.sendStatus(204)
    },
}
module.exports = User;
