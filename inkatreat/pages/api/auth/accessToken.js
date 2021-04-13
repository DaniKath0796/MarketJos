import connectDB from "../../../utils/connectDB";
import Cliente from "../../../models/clienteModelo";
import Tienda from "../../../models/tiendaModelo";
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
    const userTienda = await Tienda.findById(result.id);
    if (!user && !userTienda)
      return res.status(400).json({ err: "El usuario no existe." });

    if (user) {
      const access_token = CreateAccessToken({ id: user._id });
      res.json({
        access_token,
        user: {
          name: user.nombreCliente,
          email: user.email,
          role: user.role,
        },
      });
    }

    if (userTienda) {
      const access_token = CreateAccessToken({ id: userTienda._id });
      res.json({
        access_token,
        user: {
          name: userTienda.nombreCliente,
          email: userTienda.email,
          role: userTienda.role,
        },
      });
    }
  } catch (err) {
    return res.status(500).json({ err: err.message });
  }
};
