import connectDB from "../../../utils/connectDB";
import Tienda from "../../../models/tiendaModelo";
import valid from "../../../utils/validTienda";
import bcrypt from "bcrypt";

connectDB();

export default async (req, res) => {
  switch (req.method) {
    case "POST":
      await registro(req, res);
      break;
  }
};

const registro = async (req, res) => {
  try {
    const {
      nombreTienda,
      nombreEncargado,
      email,
      password,
      cf_password,
      tipoTienda,
      celularContacto,
      direccion,
      logo,
      rubroId,
    } = req.body;

    const errMsg = valid(
      nombreTienda,
      nombreEncargado,
      email,
      password,
      cf_password,
      tipoTienda,
      celularContacto,
      direccion
    );
    if (errMsg) return res.status(400).json({ err: errMsg });

    const user = await Tienda.findOne({ email });
    if (user) return res.status(400).json({ err: "El email ya existe." });

    const passwordHash = await bcrypt.hash(password, 12);

    const newUser = new Tienda({
      nombreTienda,
      nombreEncargado,
      email,
      password: passwordHash,
      cf_password,
      tipoTienda,
      celularContacto,
      direccion,
      logo,
      rubroId,
    });

    await newUser.save();
    res.json({ msg: "Registro Exitoso" });
  } catch (err) {
    return res.status(500).json({ err: err.message });
  }
};
