import { userModel } from "../models/users.js";

export const getOneUser = (req, res, next) =>{
    res.status(200).json('get one user')
};

export const getAllUsers = (req, res, next) =>{
    res.status(200).json('get all users')
};

export const addUser = (req, res, next) =>{
    res.status(201).json('add a user')
};

export const updateUser = (req, res, next) =>{
    res.status(201).json('update a user')
};

export const deleteUser = (req, res, next) =>{
    res.status(201).json('delete a user')
}