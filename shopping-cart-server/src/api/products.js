const express = require ('express');
const router = express.Router ();
const pool = require ('../database');


router.get ('/', (request, response) => {
    pool.query ('SELECT * FROM products',(error, results, fields) =>{
        if (error) {
          return response.send(error);
        }
        response.json(results);
      });
  });

  module.exports = router;
