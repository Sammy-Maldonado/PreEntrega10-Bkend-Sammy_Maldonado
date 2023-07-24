//Genero el error para el cliente
export default (error, req, res, next) => {
  console.log(error);
  res.status(error.status).send({status:"error", error:error.message})
}