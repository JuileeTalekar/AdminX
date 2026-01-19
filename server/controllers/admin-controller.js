const User = require("../models/user-model");
const Contact = require("../models/contact-model");
const getAllUsers = async(req, res, next) => {
    try{
        const users = await User.find({},{password:0});
        console.log(users);
        if(!users|| users.length===0){
            return res.status(404).json({message: 'No users found'});
        }
        res.status(200).json(users);


    }
    catch(error){
        next(error);

    }


};


const getAllContacts = async(req, res, next) => {
    try{
        const contacts = await Contact.find({});
        if(!contacts || contacts.length === 0){
            return res.status(404).json({message: 'No contacts found'});
        }
        res.status(200).json(contacts);
    }
    catch(error){
        next(error);


    }
}

const deleteUserById = async(req, res, next) => {
    try{
        const id  = req.params.id;
        // const deletedUser = await User.findByIdAndDelete(id);
        await User.deleteOne({_id: id});
        // if(!deletedUser){
        //     return res.status(404).json({message: 'User not found'});
        // }
        res.status(200).json({message: 'User deleted successfully'});
    }
    catch(error){
        next(error);
    }
}

const getUserById = async(req, res, next) =>{
    try{
        const id = req.params.id;
        const data = await User.findOne({_id: id},{password:0});
        if(!data){
            return res.status(404).json({message: 'User not found'});
        }
        res.status(200).json(data);
    }catch(error){
        next(error);
    }
}

const updateUserById = async(req, res, next) => {
    try{
        const id = req.params.id;
        const updateData = req.body;
        const updatedUser = await User.updateUserById(id, updateData, {new: true}).select({password:0});
        // const updatedUser = await User.updateOne({_id: id}, {$set: updateData});
        if(!updatedUser){
            return res.status(404).json({message: 'User not found'});
        }
        res.status(200).json(updatedUser);
    }catch(error){
        next(error);
    }
}

const deleteContactById = async(req, res, next) => {
    try{
        const id  = req.params.id;
        await Contact.deleteOne({_id: id});
        res.status(200).json({message: 'Contact deleted successfully'});
    }
    catch(error){
        next(error);
    }
}


const getContactById = async(req, res, next) =>{
    try{
        const id = req.params.id;
        const data = await Contact.findOne({_id: id});
        res.status(200).json(data);
    }catch(error){
        next(error);
    }
}

// Update Contact Logic (rarely used but valid)
const updateContactById = async(req, res, next) => {
    try{
        const id = req.params.id;
        const updateData = req.body;
        const updatedContact = await Contact.findByIdAndUpdate(id, updateData, {new: true});
        res.status(200).json(updatedContact);
    }catch(error){
        next(error);
    }
}

module.exports = {getAllUsers, getAllContacts, deleteUserById, getUserById, updateUserById, deleteContactById, getContactById, updateContactById};