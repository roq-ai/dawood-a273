interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Business Owner'],
  customerRoles: ['Customer'],
  tenantRoles: ['Business Owner', 'Team Member', 'Administrator', 'Customer Service Representative', 'End Customer'],
  tenantName: 'Company',
  applicationName: 'dawood',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: ['Read product information', 'Create orders', 'Manage cart', 'Read order status'],
  ownerAbilities: ['Manage user information', 'Manage company details', 'Manage products', 'Manage orders'],
  getQuoteUrl: 'https://app.roq.ai/proposal/cae450ff-1233-4d4d-9420-d321d51052fc',
};
