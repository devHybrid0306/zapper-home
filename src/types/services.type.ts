// export interface NFTData {}

export enum SupportsErc {
  Erc1155 = 'erc1155',
  Erc20 = 'erc20',
  Erc721 = 'erc721',
}

export interface BalancesDataItem {
  contract_decimals: number;
  contract_name: string;
  contract_ticker_symbol: string;
  contract_address: string;
  supports_erc: SupportsErc[] | null;
  logo_url: string;
  last_transferred_at: Date | null;
  native_token: boolean;
  type: any;
  balance: null | string;
  balance_24h: null | string;
  quote_rate: number | null;
  quote_rate_24h: null;
  quote: number;
  quote_24h: null;
  nft_data: any[] | null;
}

export interface BalancesData {
  address: string;
  updated_at: Date;
  next_update_at: Date;
  quote_currency: string;
  chain_id: number;
  items: BalancesDataItem[];
  pagination: null;
}

export interface Balances {
  data: BalancesData;
  error: boolean;
  error_message: null;
  error_code: null;
}
