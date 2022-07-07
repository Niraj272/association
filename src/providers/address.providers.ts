import { address } from "src/entities/address.details.entity";

export const addressProviders = [
  {
    provide: 'ADDRESS_REPOSITORY',
    useValue: address,
  },
];
