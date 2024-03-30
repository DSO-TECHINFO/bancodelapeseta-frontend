export interface ITransaction {
  beneficiaryName: string;
  destinationAccount: string;
  payerAccount: string;
  concept: string;
  description: string;
  amount: string;
  verificationCode: string;
}
