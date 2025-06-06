import type { RegisterOptions } from 'react-hook-form';

export interface FormFields {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

export type FieldConfig<K extends keyof FormFields> = {
  name: K;
  label: string;
  placeholder: string;
  rules: RegisterOptions<FormFields, K>;
  type?: string;
};

export interface FormSection {
  title: string;
  fields: FieldConfig<keyof FormFields>[];
}
