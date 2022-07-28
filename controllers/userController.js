const { creteUser, getUserProfile, login, updateProfile, changePassword } = require('../models/usersModel');


module.exports = {
    CreateUser: (req, res) => {

        creteUser(req.body, (error, result) => {
            if (error) {
                res.json({
                    status: 404,
                    message: error
                })
            }
            else {
                res.json({
                    status: 200,
                    message: 'User Registered successfully'
                })
            }
        })
    },
    GetUserProfile: (req, res) => {
        getUserProfile(req.body, (error, result) => {
            if (error) {
                res.json({
                    status: 404,
                    message: error
                })
            }
            else {
                res.json({
                    status: 200,
                    message: 'user profile fetched successfully',
                    data: result
                })
            }
        })
    },
    Login: (req, res) => {
        login(req.body, (error, result) => {
            if (error) {
                res.json({
                    status: 404,
                    message: error
                })
            }
            else {
                res.json({
                    status: 200,
                    message: 'Login Successful',
                    data: result
                })
            }
        })
    },
    UpdateProfile: (req, res) => {
        updateProfile(req.body, (error, result) => {
            if (error) {
                res.json({
                    status: 404,
                    message: error
                })
            }
            else {
                res.json({
                    status: 200,
                    message: 'Updated Sucessfully',
                    data: result
                })
            }
        })
    },
    UpdatePassword: (req, res) => {
        changePassword(req.body, (error, result) => {
            if (error) {
                res.json({
                    status: 404,
                    message: error
                })
            }
            else {
                res.json({
                    status: 200,
                    message: 'Password Updated Sucessfully',
                    data: result
                })
            }
        })
    }
    
}