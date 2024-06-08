const User = require('../models/user')

GetAllUsers = async (req, res) => {
    const allDbUsers = await User.find({});
    return res.json(allDbUsers)
}
GetUserById = async (req, res) => {
    const user = await User.findById(req.params.id);
    if (!user) res.status(400).json({ error: 'Id not found' })
    else return res.json(user);
}
UpdateUserById = async (req, res) => {
    await User.findByIdAndUpdate(req.params.id, { lastname: "Pushpendra" });
    return res.json({ status: "Updated" })
}
DeleteUserById = async (req, res) => {
    await User.findByIdAndDelete(req.params.id);
    return res.json({ status: "Deleted" })
}
CreateUser = async(req,res)=>{
    const body = req.body;
    if (!body ||
        !body.first_name ||
        !body.last_name ||
        !body.email ||
        !body.gender ||
        !body.job_title
    ) {
        return res.status(400).json({ msg: 'Enter all fields...' });
    }
    const result = await User.create({
        firstName: body.first_name,
        lastName: body.last_name,
        email: body.email,
        gender: body.gender,
        jobTitle: body.job_title,
    })
    return res.status(201).json({ msg: 'Success',id:result._id });
}
module.exports = { GetAllUsers, GetUserById, UpdateUserById,DeleteUserById, CreateUser};