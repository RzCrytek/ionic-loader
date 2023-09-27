export interface MessageConfig {
  img: string;
  alt: string;
  description: string;
}

export type ConfigurationType = 'messagesConfig1' | 'messagesConfig2';

export enum Configurations {
  FirstConfig = 'messagesConfig1',
  SecondConfig = 'messagesConfig2',
}
