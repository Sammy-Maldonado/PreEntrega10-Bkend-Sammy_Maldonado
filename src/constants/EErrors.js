//EErrors (Enum error o enumeración de posibles errores que vayan a ocurrir)
const EErrors = {
  INCOMPLETE_VALUES: 1, //Cuando no vengan los valores requeridos en la petición.
  INVALID_TYPES: 2, //Cuando los valores requeridos no sean válidos.
  PRODUCT_ALREADY_EXIST: 3,  //Cuando el codigo del producto esté repetido.
} 

export default EErrors