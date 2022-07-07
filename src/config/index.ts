export enum COMPANY_TYPE {
  STARTUP = 'STARTUP',
  INVESTOR = 'INVESTOR',
  BERATER = 'BERATER',
}
export enum ROLE {
  ADMIN = 'ADMIN',
  USER = 'USER',
  SUPERVIOSER = 'SUPERVIOSER',
}
export enum REGISTRATION_STATUS {
  PENDING = 'PENDING', // default
  ACCEPTED = 'ACCEPTED', // by admin
  REJECTED = 'REJECTED', // by admin
  CANCELLED = 'CANCELLED', // by user
  CONFIRMED = 'CONFIRMED', // by user
}