const admin = {
    login: '/admin/login',
    dashboard: '/admin/dashboard',
    addUser: '/admin/addUser',
    listUser: '/admin/listUser',
    listBuilding: '/admin/listBuilding',
    listAppartment:'admin/listApartment',
    addbuilding: '/admin/addBuilding',
    addAppartment: '/admin/addAppartment'
};

const superAdmin = {
    login: 'superAdmin/login'
};

const tenant = {
    login: '/tenant/login',
    dashboard: '/tenant/dashboard',
    listTenant: '/tenant/list',
    editTenant : '/tenant/edit'
};

const visitor = {
    login: '/visitor/login',
    dashboard: '/visitor/dashboard',
    listVisitor: '/visitor/list',
    editVisitor: '/visitor/edit'
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
    'createVisitor': 'https://dizzy-overcoat-moth.cyclic.app/visitor/createVisitor',
    'getVisitor': 'https://dizzy-overcoat-moth.cyclic.app/visitor',
    'deleteVisitor' : 'https://dizzy-overcoat-moth.cyclic.app/visitor/',
    'getTenant' : 'https://dizzy-overcoat-moth.cyclic.app/tenant',
    'postTenant' : 'https://dizzy-overcoat-moth.cyclic.app/tenant',
    'getBuilding' : 'http://203.161.57.248:4000/building',
    // 'getFlats' : 'http://203.161.57.
}


export const routePaths = {
    'Home': home,
    'Admin': admin,
    'SuperAdmin': superAdmin,
    'Tenant': tenant,
    'Upkeeper': upkeeper,
    'Visitor': visitor,
}
