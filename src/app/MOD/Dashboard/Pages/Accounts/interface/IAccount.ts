interface Currency {
    id: number;
    currency: string;
}

interface Product {
    id: number;
    name: string;
    description: string;
    fee: number;
    type: string;
    entityType: string;
    recurrence: string;
    currency: Currency;
    interestRate: number | null;
    active: boolean;
}

interface Account {
    id: number;
    balance: number;
    real_balance: number;
    accountNumber: string;
    currency: Currency;
}

interface Contract {
    id: number;
    type: string;
    product: Product;
    account: Account;
}

export interface IAccountData {
    id: number;
    contract: Contract;
    role: string;
    participationPercentage: number | null;
}