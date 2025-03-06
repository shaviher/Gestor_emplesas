import User from "../user/user.model.js";

export const updateUser = async (req, res) => {
    try {
        const { uid } = req.params
        const { rol, ...data } = req.body
        const userRequest = req.user

        const userUpdate = await User.findById(uid)
        if (!userUpdate) {
            return res.status(404).json({
                success: false,
                message: "User not found"
            })
        }

        if (rol) {
            if (rol && userRequest.rol !== "ADMIN") {
                return res.status(401).json({
                    success: false,
                    message: "You do not have the necessary permissions"
                })
            }
            data.rol = rol
        }

        const userUpdated = await User.findByIdAndUpdate(uid, { $set: data }, { new: true })

        return res.status(200).json({
            success: true,
            message: "User updated successfully",
            user: userUpdated
        })

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Error updating user",
            error: error.message
        })
    }
}

export const deleteUser = async (req, res) => {
    try {
        const { uid } = req.params;
        const userRequest = req.user;

        const userToDelete = await User.findById(uid);
        if (!userToDelete) {
            return res.status(404).json({
                success: false,
                message: "User not found"
            });
        }

        if (userRequest.rol !== "ADMIN" && userRequest._id.toString() !== uid) {
            return res.status(401).json({
                success: false,
                message: "You do not have the necessary permissions to delete this user"
            });
        }

        await User.findByIdAndDelete(uid);

        return res.status(200).json({
            success: true,
            message: "User deleted successfully"
        });

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Error deleting user",
            error: error.message
        });
    }
};
