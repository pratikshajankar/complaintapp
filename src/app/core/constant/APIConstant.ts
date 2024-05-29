export const APIConstant={

    // COMMAN URL FOR ALL API
API_URL:"https://projectapi.gerasim.in/api/Complaint/",

// LOGIN API
GET_LOGIN:"login",

// DASHBOARD API
ADMIN_DASH:"GetAdminDashboard",
USER_DASH:"GetUserDashboard?userId=",

    // All User API
    GET_ALL_USER:"GetAllUsers",
    ADD_NEW_USER:"AddNewUser",
    UPDATE_USER:"UpdateUser",
    DELETE_USER:"DeleteUserByUserId?userId=",

    // parent Department API
    GET_ALL_DEPARTMENT:"GetParentDepartment",
    ADD_DEPARTMENT:"AddNewDepartment",
    UPDATE_DEPARTMENT:"UpdateDepartment",
    DELETE_DEPARTMENT:"DeletedepartmentBydepartmentId?departmentId=",

    // Child Department API
    GET_CHILDDEPT_BY_PARENTDEPTID:"GetChildDepartmentByParentId?deptId=",
    GET_ALL_CHILD_DEPT:"GetAllChildDepartment",
    ADD_CHILD_DEPT:"AddChildDepartment",
    UPDATE_CHILD_DEPT:"UpdateChildDepartment",
    DELETE_CHILD_DEPT:"DeleteChildDeptById?childDeptId=",

// API for change Status of Complaint
    GET_COMPLAINT_STATUS:"GetComplaintStatus",

    // Complaint API
    GET_ALL_COMPLAINT:"getAllComplaints",
    ADD_COMPLAINT:"CreateNewComplaint",
    UPDATE_COMPLAINT:"UpdateComplaint",
    DELETE_COMPLAINT:"DeleteComplaintById?complaintId=",

    GET_COMPLAINT_CREATED_BY_USER:"getComplaintsCreatedByUserId?userId=",
    GET_COMPLAINT_RECEIVED_BY_DEPT:"getComplaintReceivedByDeptId?childDeptId=",




    
}