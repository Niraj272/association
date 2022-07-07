import { profile_Details } from "src/entities/profile.details.entity";

export const ProfileProviders = [
  {
    provide: 'PROFILE_REPOSITORY',
    useValue: profile_Details,
  },
];
