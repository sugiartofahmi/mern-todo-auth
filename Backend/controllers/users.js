import Users from "../models/users.js";

export const register = async (req, res) => {
  try {
    const user = await Users.create(req.body);
    res.status(200).json({
      message: "success",
      user,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "failed",
    });
  }
};

export const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({
        message: "Please provide an email and password",
      });
    }

    const user = await Users.findOne({ email }).select("+password");

    if (!user) {
      return res.status(401).json({
        message: "Invalid credential",
      });
    }
    const isMatch = await user.matchPassword(password);

    if (!isMatch) {
      return res.status(401).json({
        message: "Invalid credential",
      });
    }

    const token = user.getSignedJwtToken();

    res.status(200).json({
      message: "success",
      token,
      user: {
        name: user.name,
        id: user.id,
      },
    });
  } catch (error) {
    console.error(error);
    res.status(500).send("Server Error");
  }
};
