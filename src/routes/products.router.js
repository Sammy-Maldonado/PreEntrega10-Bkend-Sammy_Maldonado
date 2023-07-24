import { Router } from "express";
import { generateProducts } from "../mocks/products.mock.js";
import ErrorService from "../services/ErrorService.js"; 
import EErrors from "../constants/EErrors.js";
import { productErrorIncompleteValues, productErrorInvalidTypes, productAlreadyExistError } from '../constants/products.Errors.js'

const router = Router();

const products = [];

router.get('/mockingproducts', (req, res) => {
  //Endpoint que devolverá 100 productos de prueba.
  for (let i = 0; i < 100; i++) {
    products.push(generateProducts());
  }
  res.send({status:"success", payload: products});
})

router.post('/mockingproducts', (req,res) => {
  const {title, description, price, department, stock, code} = req.body;
  const actualProduct = req.body
  //Validando que si vengan todos los datos.
  if(!title || !description || !price || !department || !stock || !code){
    //Genero el error para el Servidor.
    ErrorService.createError({
      name: "Error de creacion de producto",
      cause: productErrorIncompleteValues({title, description, price, department, stock, code}),
      message: "Error intentando crear un nuevo producto, por favor, ingrese todos los datos requeridos",
      code: EErrors.INCOMPLETE_VALUES,
      status: 400
    })
  }

  //Validando que los campos correspondientes sean string
  if (typeof title !== "string" || typeof description !== "string" || typeof department !== "string" || typeof code !== "string") {
    ErrorService.createError({
      name: "Error de creacion de producto",
      cause: productErrorInvalidTypes({title, description, price, department, stock, code}),
      message: "Los campos (title, description, department, code) deben ser de tipo string.",
      code: EErrors.INVALID_TYPES,
      status: 400
    });
  }

  //Validando que los campos correspondientes sean number y no sean valores negativos
  if (typeof price !== "number" || typeof stock !== "number" || !Number.isInteger(stock) || price < 0 || stock < 0 ) {
    ErrorService.createError({
      name: "Error de creacion de producto",
      cause: productErrorInvalidTypes({title, description, price, department, stock, code}),
      message: "Los campos (price, stock) deben ser de tipo numérico y no negativos. Además, stock debe ser un numero entero.",
      code: EErrors.INVALID_TYPES,
      status: 400
    });
  }

  //Verificando si elgun codigo ya esta en uso en el array "products"
  const isCodeAlreadyUsed = products.some((product) => product.code === code);
  if(isCodeAlreadyUsed) {
    ErrorService.createError({
      name: "Error de creacion de producto",
      cause: productAlreadyExistError({code}),
      message: "El código de producto proporcionado ya está en uso.",
      code: EErrors.PRODUCT_ALREADY_EXIST,
      status: 400
    });
  }

  products.push(actualProduct)
  res.send({status:"success", message: "Su producto se ha agregado correctamente", payload: products});
})



export default router;