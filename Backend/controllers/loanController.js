const Loan = require("../models/loanModel");

//data display function


const getAllLoans = async (req, res, next) => {

    let loan; //variable create

    // loan display part\
    //data base eke okkoma data return kara gnnwa

    try{
        loan = await Loan.find();
    }catch(err){
        console.log(err);
    }


    // if loan details not founsd display part
    if(!loan){
        return res.status(404).json({message:"Loans not found"});
    }
    //Display all Loans
    return res.status(200).json({ loan }); 

};


//data insert part
const addLoan = async (req, res, next) => {

    const { BorrowersName, LoanAmount, InterestRate, Period, StartingDate, EndDate, TotalInstallments, PaidInstallments, Notes,  LoanStatus } = req.body;
    let loan;

    try {
        loan = new Loan({ BorrowersName, LoanAmount, InterestRate, Period, StartingDate, EndDate, TotalInstallments, PaidInstallments, Notes,  LoanStatus});
        await loan.save();
    }catch(err){
        console.log(err);
    }
    // not insert Loan
    if (!loan) {
       return res.status(404).json({ message: "Unable To add Loans" });
     }
     return res.status(200).json({loan});
};


//get by id 
const getById = async (req, res, next) => {

    const id = req.params.id;
    let loan;

    try{
        loan = await Loan.findById(id);
    }catch(err){
        console.log(err);
    }


    // not availabe loans

    if (!loan) {
        return res.status(404).json({ message: "Loan not Found" });
      }
      return res.status(200).json({loan});

};


//update loan details 
const updateLoan = async (req, res, next ) => {

    const id = req.params.id;
    const { BorrowersName, LoanAmount, InterestRate, Period, StartingDate, EndDate, TotalInstallments, PaidInstallments, Notes, LoanStatus } = req.body;

    let loans;

    try {
        loans = await Loan.findByIdAndUpdate(id, 
            { BorrowersName:BorrowersName, LoanAmount:LoanAmount, InterestRate:InterestRate, Period:Period, StartingDate:StartingDate, EndDate:EndDate, TotalInstallments:TotalInstallments, PaidInstallments:PaidInstallments, Notes:Notes,  LoanStatus:LoanStatus});
        loans = await loans.save();
    }catch(err){
        console.log(err);
    }

    if (!loans) {
        return res.status(404).json({ message: "unable to Update Loan Details" });
      }
      return res.status(200).json({loans});

}


//delete Loan Details 

const deleteLoan = async(req, res,next) => {
    const id = req.params.id;
    let loan;

    try{
        loan = await Loan.findByIdAndDelete(id);
    }catch(err) {
        console.log(err);
    } 
    //not available vehicles
    if(!loan){
        return res.status(404).json({message:" Unable to Delete Loan Details"});
    }
    return res.status(200).json({loan});
};

exports.getAllLoans = getAllLoans;
exports.addLoan = addLoan;
exports.getById = getById;
exports.updateLoan = updateLoan;
exports.deleteLoan =deleteLoan;