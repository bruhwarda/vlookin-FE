//TOTAL 5 ROLES
//ADMIN // ADD TENANTS/USERS, ADD BUILDINGS, APARTMENTS, RECEIPT VOUCHERS
//SUPER ADMIN // HAS ACCESS OF ALL THE FLOWS
//USER -> TENANT -> LAUNCH COMLAINTS/ SEE STATUS OF COMPLAINTS
//STAFF/VISITOR -> ADD/ LIST VISITO
//MAINTENANCE ->


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
    login: 'superAdmin/login'
};

const tenant = {
    login: '/tenant/login',
    dashboard: '/tenant/dashboard',
    listTenant: '/tenant/list',
    editTenant: '/tenant/edit/:id',
};

const maintenance = {
    dashboard: '/maintenance/dashboard'
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
    complaintList: '/user/complaint-list'

}


const upkeeper = {
    login: 'upkeeper/login'
};

const home = {
    home: '/'
}

export const apiRoutes = {
    'postUser': 'http://203.161.57.248:4000/auth/login',
    'getUsers': 'http://203.161.57.248:4000/user',
    'createUsers': 'http://203.161.57.248:4000/user',
    'createVisitor': "http://203.161.57.248:4000/visitor/createVisit",
    'getVisitor': `http://203.161.57.248:4000/visitor?all=true`,
    'deleteVisitor': 'http://203.161.57.248:4000/visitor/',
    'getTenant': 'http://203.161.57.248:4000/tenant?all=true',
    'postTenant': 'http://203.161.57.248:4000/tenant',
    'getBuilding': 'http://203.161.57.248:4000/building?all=true',
    'getApartment': 'http://203.161.57.248:4000/apartment?all=true',
    'createBuilding': "http://203.161.57.248:4000/building",
    'createApartment': "http://203.161.57.248:4000/apartment"
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
