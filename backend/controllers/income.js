const IncomeSchema = require("../models/incomeModel")



exports.addIncome = async (req,res) => {
    const {title,amount,category,description,date} = req.body
    const income = IncomeSchema({
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
        res.status(200).json({message:'Income added'})
    }
    catch(error){
        res.status(500).json({message:'SERVER ISSUES'})
    }
}
exports.getIncome = async (req,res)=>{
    console.log("srikar")
    try{
        const incomes = await IncomeSchema.find().sort({createdAt: -1})
        res.status(200).json(incomes); 
    }catch(error){
        res.status(500).json({message:'SERVER ISSUES'})
    }
}

exports.deleteIncome = async(req,res)=>{
    const {id} = req.params;
    IncomeSchema.findByIdAndDelete(id).
    then((income)=>{
        res.status(200).json({message:'Income Deleted'})
    })
    .catch((error)=>{
        res.status(500).json({message:'SERVER ISSUES'})
    })
}