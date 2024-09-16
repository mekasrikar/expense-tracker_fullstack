const  ExpenseSchema = require("../models/expenseModel")



exports.addExpense = async (req,res) => {
    const {title,amount,category,description,date} = req.body
    const income = ExpenseSchema({
        title,
        amount,
        category,
        description,
        date
    })
    try{
        if(!title || !description || !date || !category){
            return res.status(400).json({message: 'All feilds are required'})
        }
        if(amount<=0 || !amount==='number'){
            return res.status(400).json({message:'Amount should be a positive number'})
        }
        await income.save()
        res.status(200).json({message:'Expense added'})
    }
    catch(error){
        res.status(500).json({message:'SERVER ISSUES'})
    }
}
exports.getExpense = async (req,res)=>{
    try{
        const incomes = await ExpenseSchema.find().sort({createdAt: -1})
        res.status(200).json(incomes); 
    }catch(error){
        res.status(500).json({message:'SERVER ISSUES'})
    }
}

exports.deleteExpense = async(req,res)=>{
    const {id} = req.params;
    ExpenseSchema.findByIdAndDelete(id).
    then((income)=>{
        res.status(200).json({message:'Expense Deleted'})
    })
    .catch((error)=>{
        res.status(500).json({message:'SERVER ISSUES'})
    })
}