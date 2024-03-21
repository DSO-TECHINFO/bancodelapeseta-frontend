interface ICurrency {
  currency: string;
}

interface IAccount {
  balance: number;
  real_balance: number;
  currency: ICurrency;
  account_number: string;
  locked: boolean;
}

export interface ILoanData {
  id: number;
  account: IAccount;
  amount: number;
  totalAmount: number;
  interestRate: number;
  initialSubscriptionRate: number;
  currentSubscriptionRate: number;
  startDate: string;
  initialFinishDate: string;
  currentFinishDate: string;
  paidAmount: number;
  unpaidAmount: number;
  pendingAmount: number;
  paidSubscriptions: number;
}
