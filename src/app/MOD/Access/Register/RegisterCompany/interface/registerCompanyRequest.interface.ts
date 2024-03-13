export interface RegisterCompanyRequest {
  name: string;
  taxId: string;
  password: string;
  address: string;
  addressAdditionalInfo: string;
  postalCode: string;
  addressTown: string;
  addressCity: string;
  addressCountry: string;
  phoneNumber: string;
  email: string;
  debtType: string;
  settingUpDate: string;
}
