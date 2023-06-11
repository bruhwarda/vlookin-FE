const admin = {
    login : '/admin/login',
    dashboard : '/admin/dashboard',
    addUser : '/admin/addUser',
    listUser : '/admin/listUser'
};

const superAdmin = {
    login : 'superAdmin/login'
};

const tenant = {
    login : 'tenant/login'
};

const upkeeper = {
    login : 'upkeeper/login'
};

const home = {
    home : '/'
}

export const routePaths = {
    'Home' : home,
    'Admin' : admin,
    'SuperAdmin' : superAdmin,
    'Tenant' : tenant,
    'Upkeeper' : upkeeper
}