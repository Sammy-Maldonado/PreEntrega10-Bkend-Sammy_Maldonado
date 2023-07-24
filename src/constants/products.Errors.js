export const productErrorIncompleteValues = (product) => {
  //Devuelvo toda una string con la explicación de que está pasando
  return `Uno o más parámetros obligatorios no fueron proporcionados correctamente:
  Propiedades obligatorias:
  * title: se esperaba una cadena definida, y se recibió '${product.title}',
  * description: se esperaba una cadena definida, y se recibió '${product.description}',
  * price: se esperaba una cadena definida, y se recibió '${product.price}',
  * department: se esperaba una cadena definida, y se recibió '${product.department}',
  * stock: se esperaba una cadena definida, y se recibió '${product.stock}',
  * code: se esperaba una cadena definida, y se recibió '${product.code}',
  `
}

export const productErrorInvalidTypes = (product) => {
  //Devuelvo toda una string con la explicación de que está pasando
  return `Uno o más parámetros obligatorios no fueron proporcionados correctamente:
  Propiedades obligatorias:
  * title: se esperaba una cadena de caracteres, y se recibió '${typeof product.title}',
  * description: se esperaba una cadena de caracteres, y se recibió '${typeof product.description}',
  * price: se esperaba un número no negativo, y se recibió '${typeof product.price === "number" ? product.price : "caracter inválido"}',
  * department: se esperaba una cadena de caracteres, y se recibió '${typeof product.department}',
  * stock: se esperaba un número no negativo y entero, y se recibió '${typeof product.stock === "number" ? product.stock : "caracter inválido"}',
  * code: se esperaba una cadena de caracteres, y se recibió '${typeof product.code}',
  `
}

export const productAlreadyExistError = (product) => {
  return `El codigo del producto que se ha proporcionado, actualmente está en uso.
  Propiedad obligatoria:
  * code: se esperaba una nueva cadena de caracteres, pero se repitió '${product.code}'
  `
}