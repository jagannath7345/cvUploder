import UserProfileModel from "../models/UserProfile.js";

class userController {
  static createProfile = async (req, res) => {
    try {
      const { name, email, dob, state, gender, location } = req.body;
      const pimage = req.files["pimage"][0].filename;
      const rdoc = req.files["rdoc"][0].filename;

      if (name && email && pimage && rdoc) {
        const doc = new UserProfileModel({
          name: name,
          email: email,
          dob: dob,
          state: state,
          gender: gender,
          location: location,
          pimage: pimage,
          rdoc: rdoc,
        });
        const user = await doc.save();
        res
          .status(200)
          .send({
            status: "sucees",
            message: "Profile Created Sucessfully",
            user: user,
          });
      } else {
        res
          .status(200)
          .send({ status: "failed", message: "All Fields are Required" });
      }
    } catch (error) {}
  };
}

export default userController;
