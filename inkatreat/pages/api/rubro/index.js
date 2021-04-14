import connectDB from "../../../utils/connectDB";
import Rubro from "../../../models/rubroModelo";

connectDB();

export default async (req, res) => {
  switch (req.method) {
    case "GET":
      await getRubros(req, res);
      break;
  }
};

const getRubros = async (req, res) => {
  try {
    const rubros = await Rubro.find();

    res.json({
      status: "success",
      result: rubros.length,
      rubros,
    });
  } catch (err) {
    return res.status(500).json({ err: err.message });
  }
};
