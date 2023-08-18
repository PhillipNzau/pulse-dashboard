export interface UserModel {
    id: {
        entityType: string,
        id: string,
      },
      createdTime: number,
      additionalInfo: {
        description:string,
        defaultDashboardId:string,
        defaultDashboardFullscreen:string,
        homeDashboardId:string,
        homeDashboardHideToolbar:string,
        userPasswordHistory: {
          1692092444860:string,
          1692092444866:string,
          1692093667677:string,
        },
        userCredentialsEnabled: true,
        failedLoginAttempts: 0,
        lastLoginTs: number
      },
      tenantId: {
        entityType: string,
        id: string,
      },
      customerId: {
        entityType: string,
        id: string,
      },
      email: string,
      authority: string,
      firstName: string,
      lastName: string,
      name: string,
}

export interface UpdatePwdModel {
  currentPassword: string,
  newPassword: string
}