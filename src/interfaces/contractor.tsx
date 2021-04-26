
export interface Contractor {
  id?: number;
  logo: string;
  name: string;
  rating: number;
}

export const ContractorInitialState = {
  id: 0,
  logo: '',
  name: '',
  rating: 0
}