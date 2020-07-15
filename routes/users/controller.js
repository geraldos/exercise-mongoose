const {
    User
} = require('../../models')

module.exports = {
    userRegistration: async (req, res) => {
        const {
            name,
            email,
            password
        } = req.body

        try {
            const user = await User.create({
                name,
                email,
                password
            })

            res.send({
                message: `Registration complete`,
                results: user
            })
        } catch (error) {
            res.send(error)
        }
    },
    getAllUser: async (req, res) => {
        try {
            const result = await User.find();
            res.send({
                result
            });
        } catch (error) {
            res.send(error);
        }
    },
    filterUser: async (req, res) => {
        const {
            name
        } = req.params
        console.log(name)
        try {
            const result = await User.find({
                name: {
                    $regex: name,
                    $options: 'i'
                }
            })
            res.send({
                message: `Filter data by name ${name}`,
                result
            })
        } catch (error) {
            console.log(error)
            res.send(error)
        }
    },
    userEdit: async (req, res) => {
        const {
            id
        } = req.params;
        try {
            await User.findByIdAndUpdate(id, {
                $set: {
                    ...req.body
                }
            })

            const result = await User.findById(id)
            res.send({
                message: `Update data successfull`,
                result: result
            })
        } catch (error) {
            res.send(error)
        }
    },
    userDelete: async (req, res) => {
        const {
            id
        } = req.params
        try {
            await User.findOneAndDelete(id)
            const result = await User.findById(id)
            res.send({
                message: `Delete data successfull`,
                result: result
            })
        } catch (error) {
            res.send(error)
        }
    }
}