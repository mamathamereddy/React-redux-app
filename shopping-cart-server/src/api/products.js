const express = require ('express');
const router = express.Router ();
const pool = require ('../database');


router.get ('/', (req, res) => {
    pool.query ('SELECT * FROM products',(error, results, fields) =>{
        if (error) {
          return res.send(error);
        }
        res.json(results);
      });
  });


  router.get ('/:id', (req, res) => {
    const id = req.params.id
    pool.query('select * from products WHERE id = ?',[id],(error, results, fields) =>{
        if (error) {
          return res.send(error);
        }
        res.json(results);
      });
  });


  router.get ('/search', (req, res) => {
    const {query} = req.query;
    pool.query(`SELECT * FROM products WHERE category = ?`,[query],(error, results, fields) =>{
        if (error) {
          return res.send(error);
        }
        res.json(results);
      });
  });
  module.exports = router;



