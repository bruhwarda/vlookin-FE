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
    'postUser':'http://devvlookin.vlookin.com/auth/login',
    'getUsers': 'http://devvlookin.vlookin.com/user',
    'createUsers': 'http://devvlookin.vlookin.com/user',
    'createVisitor': "http://devvlookin.vlookin.com/visitor/createVisit",
    'getVisitor': `http://devvlookin.vlookin.com/visitor?all=true`,
    'deleteVisitor' : 'http://devvlookin.vlookin.com/visitor/',
    'getTenant' : 'http://devvlookin.vlookin.com/tenant?all=true',
    'postTenant' : 'http://devvlookin.vlookin.com/tenant',
    'getBuilding' : 'http://devvlookin.vlookin.com/building?all=true',
    'getApartment' : 'http://devvlookin.vlookin.com/apartment?all=true',
    'createBuilding' : "http://devvlookin.vlookin.com/building" 
}


export const routePaths = {
    'Home': home,
    'Admin': admin,
    'SuperAdmin': superAdmin,
    'Tenant': tenant,
    'Upkeeper': upkeeper,
    'Visitor': visitor,
}
