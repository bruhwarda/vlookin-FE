const admin = {
    login: '/admin/login',
    dashboard: '/admin/dashboard',
    addUser: '/admin/addUser',
    listUser: '/admin/listUser',
    listBuilding: '/admin/listBuilding',
    listAppartment:'/admin/listApartment',
    addbuilding: '/admin/addBuilding',
    addAppartment: '/admin/addAppartment',
    editBuilding : '/admin/editBuilding/:id'

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
    'getVisitor': 'http://203.161.57.248:4000/visitor',
    'deleteVisitor' : 'https://dizzy-overcoat-moth.cyclic.app/visitor/',
    'getTenant' : 'http://203.161.57.248:4000/tenant',
    'postTenant' : 'https://dizzy-overcoat-moth.cyclic.app/tenant',
    'getBuilding' : 'http://203.161.57.248:4000/building',
    'getApartment' : 'http://203.161.57.248:4000/apartment',
    'createBuilding' : "https://dizzy-overcoat-moth.cyclic.app/building/createBuilding" 
}


export const routePaths = {
    'Home': home,
    'Admin': admin,
    'SuperAdmin': superAdmin,
    'Tenant': tenant,
    'Upkeeper': upkeeper,
    'Visitor': visitor,
}
