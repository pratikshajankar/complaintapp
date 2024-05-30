export class ChildDept{
    "childDeptId": number;
    "parentDeptId": number;
    "departmentName": string;

    constructor(){
        this.childDeptId=0;
        this.parentDeptId=0;
        this.departmentName="";
    }
}