import type { RegisterOptions } from 'react-hook-form';

export interface FormRegisterFields {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

export interface FormAuthFields {
  email: string;
  password: string;
}
export type CommonFields = keyof FormAuthFields | keyof FormRegisterFields;

type FieldConfig<K extends CommonFields> = {
  name: K;
  label: string;
  placeholder: string;
  rules: RegisterOptions<FormRegisterFields | FormAuthFields, K>;
  type?: string;
};

export interface IFormSection {
  title: string;
  fields: FieldConfig<CommonFields>[];
}
