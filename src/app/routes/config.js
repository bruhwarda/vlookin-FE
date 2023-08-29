//TOTAL 5 ROLES
//ADMIN // ADD TENANTS/USERS, ADD BUILDINGS, APARTMENTS, RECEIPT VOUCHERS
//SUPER ADMIN // HAS ACCESS OF ALL THE FLOWS
//USER -> TENANT -> LAUNCH COMLAINTS/ SEE STATUS OF COMPLAINTS
//STAFF/VISITOR -> ADD/ LIST VISITO
//MAINTENANCE ->
//just check

const admin = {
    login: '/login',
    dashboard: '/admin/dashboard',
    addUser: '/admin/addUser',
    listUser: '/admin/listUser',
    listBuilding: '/admin/listBuilding',
    listAppartment: '/admin/listApartment',
    addbuilding: '/admin/addBuilding',
    addAppartment: '/admin/addAppartment',
    editBuilding: '/admin/editBuilding/:id',
    editApartment: '/admin/editApartment/:id',
    adminListComplaint: '/admin/adminlistcomplaint'
};


const superAdmin = {
    login: '/superAdmin/login',
    addUser: '/superAdmin/addUser',
    editUser:'/superAdmin/editUser/:id',
    listUser:'/superAdmin/listUser',
    building: '/superAdmin/building',
    maintenance: '/superAdmin/maintenance/complaints',
    visitor : '/superAdmin/visitor',
    tenant : '/superAdmin/tenant',
    apartment : '/superAdmin/apartment',
};

const tenant = {
    login: '/tenant/login',
    dashboard: '/tenant/dashboard',
    listTenant: '/tenant/list',
    editTenant: '/tenant/edit/:id',
};

const maintenance = {
    dashboard: '/maintenance/dashboard',
    complaintList: '/maintenance/complaints'
}

const visitor = {
    login: '/visitor/login',
    dashboard: '/visitor/dashboard',
    listVisitor: '/visitor/list',
    editVisitor: '/visitor/edit/:id',
    receipt: '/visitor/receipt'
};

const user = {
    dashboard: '/user/dashboard',
    complaintForm: '/user/complaint-form',
    complaintList: '/user/complaint-list',
    receiptList: '/user/receipts'

}


const upkeeper = {
    login: 'upkeeper/login'
};

const home = {
    home: '/'
}

export const apiRoutes = {
    'postUser': 'http://203.161.57.248:4000/auth/login',
    'getUsers': 'http://203.161.57.248:4000/user?all=true',
    'createUsers': 'http://203.161.57.248:4000/user',
    'createVisitor': "http://203.161.57.248:4000/visitor/createVisit",
    'getVisitor': `http://203.161.57.248:4000/visitor?all=true`,
    'deleteVisitor': 'http://203.161.57.248:4000/visitor/',
    'getTenant': 'http://203.161.57.248:4000/tenant?all=true',
    'postTenant': 'http://203.161.57.248:4000/tenant',
    'getBuilding': 'http://203.161.57.248:4000/building?all=true',
    'getApartment': 'http://203.161.57.248:4000/apartment?all=true',
    'createBuilding': "http://203.161.57.248:4000/building",
    'createApartment': "http://203.161.57.248:4000/apartment",
    'getComplaints': 'http://203.161.57.248:4000/maintenance/getComplaint?all=true',
    'createComplaints': 'http://203.161.57.248:4000/maintenance/addComplaint',
    'getReceipts': 'http://203.161.57.248:4000/receipt?all=true'
}


export const routePaths = {
    'Home': home,
    'Admin': admin,
    'SuperAdmin': superAdmin,
    'Tenant': tenant,
    'Upkeeper': upkeeper,
    'Visitor': visitor,
    'Maintenance': maintenance,
    'User': user
}
