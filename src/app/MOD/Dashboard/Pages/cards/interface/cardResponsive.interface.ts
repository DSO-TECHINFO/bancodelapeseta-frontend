export interface ContractResponse {
  id:                      number;
  contract:                Contract;
  role:                    string;
  participationPercentage: null;
}

export interface Contract {
  id:      number;
  type:    string;
  product: Product;
  account: Account;
  card:    Card;
}

export interface Account {
  id:            number;
  balance:       number;
  real_balance:  number;
  accountNumber: string;
  currency:      Currency;
}

export interface Currency {
  id:       number;
  currency: string;
}

export interface Card {
  id:               number;
  number:           string;
  expiration:       string;
  cashierLimit:     number;
  dailyBuyoutLimit: number;
  activated:        boolean;
  activationDate:   Date;
  cardType:         string;
  chargedAmount:    number;
  fee:              number;
}

export interface CardData {
  id:               number;
  name:             string;
  type:             string;
  number:           string;
  expiration:       string;
  amount:           number;
  cvv:              string;
}

export interface Product {
  id:           number;
  name:         string;
  description:  string;
  fee:          number;
  type:         string;
  entityType:   string;
  recurrence:   string;
  currency:     Currency;
  interestRate: null;
  active:       boolean;
}
