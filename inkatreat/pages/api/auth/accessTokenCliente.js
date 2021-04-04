import connectDB from "../../../utils/connectDB";
import Cliente from "../../../models/clienteModelo";
import jwt from "jsonwebtoken";
import { CreateAccessToken } from "../../../utils/generateToken";

connectDB();

export default async (req, res) => {
  try {
    const rf_token = req.cookies.refreshtoken;
    if (!rf_token)
      return res.status(400).json({ err: "Inicie sesion nuevamente." });

    const result = jwt.verify(rf_token, process.env.REFRESH_TOKEN_SECRET);
    if (!result)
      return res.status(400).json({ err: "Su token es incorrecto o expiro." });

    const user = await Cliente.findById(result.id);
    if (!user) return res.status(400).json({ err: "El usuario no existe." });

    const access_token = CreateAccessToken({ id: user._id });
    res.json({
      access_token,
      user: {
        name: user.nombreCliente,
        email: user.email,
        role: user.role,
      },
    });
  } catch (err) {
    return res.status(500).json({ err: err.message });
  }
};
