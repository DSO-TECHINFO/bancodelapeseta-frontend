export interface ITransactionRes {
  id: number;
  date: string;
  beneficiaryName: string;
  payerName: string;
  concept: string;
  description: string;
  status: string;
  amount: number;
  currency: string;
}