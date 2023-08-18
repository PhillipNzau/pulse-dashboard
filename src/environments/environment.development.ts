const baseUrl = 'https://manage.pulse.ke:443/api/'

export const environment = {
    production: false,

    // Auth urls
    loginUrl: baseUrl + 'auth/login',
    logoutUrl: baseUrl + 'auth/logout',
    authUser: baseUrl + 'auth/user',
    updateUser: baseUrl + 'user',
    updatePwd: baseUrl + 'auth/changePassword',
    forgotPwd: baseUrl + 'noauth/resetPasswordByEmail'


};
