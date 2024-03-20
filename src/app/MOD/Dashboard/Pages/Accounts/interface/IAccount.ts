// Interfaz para la moneda
export interface Currency {
  id: number;
  currency: string;
}

// Interfaz para el producto
export interface Product {
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

// Interfaz para la cuenta
export interface Account {
  id: number;
  balance: number;
  realBalance: number;
  accountNumber: string;
  currency: Currency;
}

// Interfaz para el contrato
export interface Contract {
  id: number;
  type: string;
  product: Product;
  account: Account;
}

// Interfaz para los datos de la cuenta
export interface IAccountData {
  id: number;
  contract: Contract;
  role: string;
  participationPercentage: number | null;
}