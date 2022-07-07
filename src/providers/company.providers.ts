import { company } from 'src/entities/company.details.entity';

export const companyProviders = [
  {
    provide: 'COMPANY_REPOSITORY',
    useValue: company,
  },
];
