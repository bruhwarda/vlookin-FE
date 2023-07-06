const admin = {
    login: '/admin/login',
    dashboard: '/admin/dashboard',
    addUser: '/admin/addUser',
    listUser: '/admin/listUser',
    listBuilding: '/admin/listBuilding',
    listAppartment:'/admin/listApartment',
    addbuilding: '/admin/addBuilding',
    addAppartment: '/admin/addAppartment',
    editBuilding : '/admin/editBuilding/:id',
    editApartment: '/admin/editApartment/:id'

};

const superAdmin = {
    login: 'superAdmin/login'
};

const tenant = {
    login: '/tenant/login',
    dashboard: '/tenant/dashboard',
    listTenant: '/tenant/list',
    editTenant : '/tenant/edit/:id'
};

const visitor = {
    login: '/visitor/login',
    dashboard: '/visitor/dashboard',
    listVisitor: '/visitor/list',
    editVisitor: '/visitor/edit/:id',
    receipt: '/visitor/receipt'
};


const upkeeper = {
    login: 'upkeeper/login'
};

const home = {
    home: '/'
}

export const apiRoutes = {
    'postUser':'https://dizzy-overcoat-moth.cyclic.app/auth/login',
    'getUsers': 'https://dizzy-overcoat-moth.cyclic.app/user',
    'createUsers': 'https://dizzy-overcoat-moth.cyclic.app/user',
    'createVisitor': "https://dizzy-overcoat-moth.cyclic.app/visitor/createVisit",
    'getVisitor': `http://203.161.57.248:4000/visitor?all=true`,
    'deleteVisitor' : 'https://dizzy-overcoat-moth.cyclic.app/visitor/',
    'getTenant' : 'http://203.161.57.248:4000/tenant?all=true',
    'postTenant' : 'https://dizzy-overcoat-moth.cyclic.app/tenant',
    'getBuilding' : 'http://203.161.57.248:4000/building?all=true',
    'getApartment' : 'http://203.161.57.248:4000/apartment?all=true',
    'createBuilding' : "http://203.161.57.248:4000/building" 
}


export const routePaths = {
    'Home': home,
    'Admin': admin,
    'SuperAdmin': superAdmin,
    'Tenant': tenant,
    'Upkeeper': upkeeper,
    'Visitor': visitor,
}
