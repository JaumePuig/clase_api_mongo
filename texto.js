export function saluda(nombre, apellido) {
  return "Hola " + nombre + " " + apellido + ", que tal tu dia?";
}

export function randomData(nombre, apellido, telefono, mail) {
  const rand = Math.floor(Math.random() * 4);

  switch (rand) {
    case 0:
        return nombre;
    case 1:
        return apellido;
    case 2:
        return telefono;
    case 3:
        return mail;
    default:
        return "tonto";
      break;
  }
}
