import type { IFormSection } from '../types';

export const formAuth: IFormSection[] = [
  {
    title: 'Welcome back',
    fields: [
      {
        name: 'email',
        label: 'Email',
        placeholder: '',
        rules: {
          required: 'This field is required',
          validate: (email: string) => {
            const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

            const isValidEmail = emailPattern.test(email);

            return isValidEmail ? true : 'Invalid email';
          },
        },
        type: 'email',
      },
      {
        name: 'password',
        label: 'Password',
        placeholder: '',
        rules: {
          required: 'This field is required',
        },
      },
    ],
  },
];
