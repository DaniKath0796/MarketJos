import connectDB from "../../../utils/connectDB";
import Cliente from "../../../models/clienteModelo";
import Tienda from "../../../models/tiendaModelo";
import bcrypt from "bcrypt";
import {
  CreateAccessToken,
  CreateRefreshToken,
} from "../../../utils/generateToken";

connectDB();

export default async (req, res) => {
  switch (req.method) {
    case "POST":
      await login(req, res);
      break;
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await Cliente.findOne({ email });
    const userTienda = await Tienda.findOne({ email });

    if (!user && !userTienda)
      return res.status(400).json({ err: "El usuario no existe." });

    if (user) {
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch)
        return res.status(400).json({ err: "Constraseña incorrecta." });

      const access_token = CreateAccessToken({ id: user._id });
      const refresh_token = CreateRefreshToken({ id: user._id });

      res.json({
        msg: "Login Exitoso",
        refresh_token,
        access_token,
        user: {
          name: user.nombreUsuario,
          email: user.email,
          role: user.role,
        },
      });
    }

    if (userTienda) {
      const isMatch = await bcrypt.compare(password, userTienda.password);
      if (!isMatch)
        return res.status(400).json({ err: "Constraseña incorrecta." });
      const access_token = CreateAccessToken({ id: userTienda._id });
      const refresh_token = CreateRefreshToken({ id: userTienda._id });

      res.json({
        msg: "Login Exitoso",
        refresh_token,
        access_token,
        user: {
          name: userTienda.nombreTienda,
          email: userTienda.email,
          role: userTienda.role,
        },
      });
    }
  } catch (err) {
    return res.status(500).json({ err: err.message });
  }
};
