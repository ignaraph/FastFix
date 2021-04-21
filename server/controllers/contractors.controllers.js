'use strict'

const contractorCtrl = {};

const {contractors} = require('../models/index');


contractorCtrl.getAll = async (req,res) => {
  try {
    const result = await contractors.findAll()
    res.status(200).send(result)
  } catch (error) {
    res.status(500).send('Nothing to see here')
  }
}

contractorCtrl.postContractor = async (req,res) => {
  try {
    console.log(req.body)
    const {type,logo,name,rating} = req.body;
    const result = await contractors.create({type,logo,name,rating})
    res.status(200).send(result)
  } catch (error) {
    console.error(error)
    res.status(500);
  }
}

contractorCtrl.deleteContractor = async (req,res) => {
  const contractorId =  req.params.id
  try {
   await contractors.destroy({
     where: {
      id: contractorId
     }
   })
   res.status(200).send('Contractor Deleted')
  } catch (error) {
    res.status(500).send('Error');
  }
}

module.exports = contractorCtrl;