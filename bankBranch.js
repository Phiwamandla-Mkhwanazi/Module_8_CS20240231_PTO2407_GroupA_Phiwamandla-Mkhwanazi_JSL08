//Inheritance
// 2. Define a class called `BankBranch` for managing branch information.
export default class BankBranch
{
    // 1. Create a variable to store the singleton instance of the bank branch. "bankBranchInstance"
    static BankBranchInstance; //Make it accessible and not limited to a block such as const and let.

    //Create Constructor
    constructor(_branchInfo)
    {
        //Return 
        if(BankBranch.BankBranchInstance)
            return BankBranchInstance

        this.branchInfo = _branchInfo;
        BankBranch.bankBranchInstance = this;
    }
    getBranchInfo()
    {
        return this.branchInfo;
    }

}