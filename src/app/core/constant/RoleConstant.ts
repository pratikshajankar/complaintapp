export const RoleConstant={
    menus:[
        {
            path:'user',
            text:'Employee',
            roles:['Admin']
        },
        {
            path:'dashboard',
            text:'Dashboard',
            roles:['Employee','Admin']
        },
        {
            path:'department',
            text:'Department',
            roles:['Admin']
        },
        {
            path:'complaint',
            text:'Complaint',
            roles:['Admin']
        },
        {
            path:'childdepartment',
            text:'Child-Department',
            roles:['Admin']
        },
        {
          path:'newcomplaint',
          text:'New Complaint',
          roles:['Employee']  
        },
        {
            path:'complaintlist',
            text:'Complaint List',
            roles:['Employee','Admin']  
          },
       
    ]
}