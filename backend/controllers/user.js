const UserSchema = require("../models/userModel")

exports.addUser = async (req,res) => {
    const {title,phoneNumber} = req.body
    const income = UserSchema({
        title,
        phoneNumber,
        destination
    })
    try{
        if(!title || !phoneNumber){
            return res.status(400).json({message: 'All feilds are required'})
        }
        if(phoneNumber==='number'){
            return res.status(400).json({message:'Phone number should be a number'})
        }
        await income.save()
        res.status(200).json({message:'User added'})
    }
    catch(error){
        res.status(500).json({message:'SERVER ISSUES'})
    }
}
// exports.getIncome = async (req,res)=>{
//     console.log("srikar")
//     try{
//         const incomes = await IncomeSchema.find().sort({createdAt: -1})
//         res.status(200).json(incomes); 
//     }catch(error){
//         res.status(500).json({message:'SERVER ISSUES'})
//     }
// }

// exports.deleteIncome = async(req,res)=>{
//     const {id} = req.params;
//     IncomeSchema.findByIdAndDelete(id).
//     then((income)=>{
//         res.status(200).json({message:'Income Deleted'})
//     })
//     .catch((error)=>{
//         res.status(500).json({message:'SERVER ISSUES'})
//     })
// }