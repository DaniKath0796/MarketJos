const valid = (
  nombreTienda,
  nombreEncargado,
  email,
  password,
  cf_password,
  tipoTienda,
  celularContacto,
  direccion
) => {
  if (
    !nombreTienda ||
    !nombreEncargado ||
    !email ||
    !password ||
    !tipoTienda ||
    !celularContacto ||
    !direccion
  )
    return "Agregue todos los campos.";

  if (!validateEmail(email)) return "Email invalido.";

  if (password.length < 6)
    return "La contraseña debe tener al menos 6 caracteres.";

  if (tipoTienda != "Tienda Fisica" && tipoTienda != "Tienda Hogar")
    return "Tipo de tienda no valida.";

  if (password !== cf_password) return "La contraseña no coincide.";
};

function validateEmail(email) {
  const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}

export default valid;
