export interface ITransaction {
  beneficiaryName: string;
  destinationAccount: string;
  payerName: string;
  payerAccount: string;
  concept: string;
  description: string;
  amount: string;
  currency: string;
  verificationCode: string;
}
