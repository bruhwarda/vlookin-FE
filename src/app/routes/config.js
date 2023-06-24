const admin = {
    login: '/admin/login',
    dashboard: '/admin/dashboard',
    addUser: '/admin/addUser',
    listUser: '/admin/listUser',
    addbuilding: '/admin/add/building',
    addAppartment: 'admin/add/appartment'
};

const superAdmin = {
    login: 'superAdmin/login'
};

const tenant = {
    login: '/tenant/login',
    dashboard: '/tenant/dashboard',
    listTenant: '/tenant/list'
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
    'getUsers': 'https://dizzy-overcoat-moth.cyclic.app/user',
    'createUsers': 'https://dizzy-overcoat-moth.cyclic.app/user',
    'createVisitor': 'https://dizzy-overcoat-moth.cyclic.app/visitor/createVisitor',
    'getVisitor': 'https://dizzy-overcoat-moth.cyclic.app/visitor'
}


export const routePaths = {
    'Home': home,
    'Admin': admin,
    'SuperAdmin': superAdmin,
    'Tenant': tenant,
    'Upkeeper': upkeeper,
    'Visitor': visitor,
}
