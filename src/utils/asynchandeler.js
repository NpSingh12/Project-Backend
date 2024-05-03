import { Promise } from "mongoose";
//this is code to make apromise invoke it and resole it and catch it
const asynchandeler = (requesthandeler) => {
  (err, req, res, next) => {
    Promise.resolve(requesthandeler(err, req, res, next)).catch((err) =>
      next(err)
    );
  };
};
export default asynchandeler;

//try catch code to handel the midleware
// const asynchandeler =(fn)=> async(err, req , res, next)=>{
//     try {
//         await fn(err, req, res, next)
//     } catch (error) {
//         res.status(err.code || 500).json({
//             success: false,
//             message: err.message
//         })

//     }

// }
