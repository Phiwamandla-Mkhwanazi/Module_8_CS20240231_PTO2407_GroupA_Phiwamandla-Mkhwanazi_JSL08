//Inheritance
// 2. Define a class called `BankBranch` for managing branch information.
// 3. In the `BankBranch` class:
export default class BankBranch
{
    // 1. Create a variable to store the singleton instance of the bank branch. "bankBranchInstance"
    static BankBranchInstance; //Make it accessible and not limited to a block such as const and let.

    //    - Create a constructor that takes `branchInfo` as a parameter.
    constructor(_branchInfo)
    {
    //    - Inside the constructor, check if the `bankBranchInstance` variable is null (indicating no instance exists).
        if(BankBranch.BankBranchInstance)
            //    - Return the `bankBranchInstance` whether it's newly created or existing.
            return BankBranchInstance
    
    //    - If `bankBranchInstance` is null, create a new instance with the provided `branchInfo` and assign it to `bankBranchInstance`.
        this.branchInfo = _branchInfo;
        BankBranch.bankBranchInstance = this;
    }
     // 4. Add methods to the `BankBranch` class for managing branch-related information. For example, you can add a method like `getBranchInfo` to retrieve branch details.

    getBranchInfo()
    {
        return this.branchInfo;
    }

}