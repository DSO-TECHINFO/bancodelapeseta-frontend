export default interface IForgoPasswordReq {
  type: string;
  taxId: number;
  nationalIdExpiration: string;
  phone: number;
  birthday: string;
}
