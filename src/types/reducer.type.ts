import { Balances } from './services.type';
export interface Feed {
  isLoading: boolean;
  error: boolean;
  balances?: Balances;
}
