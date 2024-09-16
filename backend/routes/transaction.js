const { addExpense, getExpense, deleteExpense } = require('../controllers/expense')
const { addIncome, deleteIncome, getIncome } = require('../controllers/income')
const { addUser } = require('../controllers/user')

const router  = require('express').Router()

router.post('/add-income', addIncome).get('/get-incomes',getIncome).delete('/delete-income/:id',deleteIncome).post('/add-expense',addExpense).get('/get-expense/:title',getExpense).delete('/delete-expense/:id',deleteExpense).post('/add-user',addUser)
module.exports = router