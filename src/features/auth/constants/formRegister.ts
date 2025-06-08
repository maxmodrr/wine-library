import type { IFormSection } from '../types';

const MIN_LENGTH_NAME = 3;
const MAX_LENGTH_NAME = 10;

export const formRegister: IFormSection[] = [
  {
    title: 'Personal information',
    fields: [
      {
        name: 'firstName',
        label: 'First Name',
        placeholder: 'Jimmy',
        rules: {
          required: 'This field is required',
          minLength: {
            value: MIN_LENGTH_NAME,
            message: `Min length is ${MIN_LENGTH_NAME} chars`,
          },
          maxLength: {
            value: MAX_LENGTH_NAME,
            message: `Max length is ${MAX_LENGTH_NAME} chars`,
          },
        },
      },
      {
        name: 'lastName',
        label: 'Last Name',
        placeholder: 'Harrots',
        rules: {
          required: 'This field is required',
          minLength: {
            value: MIN_LENGTH_NAME,
            message: `Min length is ${MIN_LENGTH_NAME} chars`,
          },
          maxLength: {
            value: MAX_LENGTH_NAME,
            message: `Max length is ${MAX_LENGTH_NAME} chars`,
          },
        },
      },
    ],
  },
  {
    title: 'Contact information',
    fields: [
      {
        name: 'email',
        label: 'Email',
        placeholder: 'jharrots@example.com',
        rules: {
          required: 'This field is required',
        },
        type: 'email',
      },
      {
        name: 'password',
        label: 'Password',
        placeholder: '',
        rules: {
          validate: (password) => {
            const customErrors = [];
            if (password.toUpperCase() === password) {
              customErrors.push('At least 1 lowercase letter');
            }
            if (password.toLowerCase() === password) {
              customErrors.push('At least 1 uppercase letter');
            }
            if (!password.match(/\d/)) {
              customErrors.push('At least 1 number');
            }
            if (password.length < 8) {
              customErrors.push('At least 8 characters');
            }

            return customErrors.length === 0 || customErrors.join(',');
          },
        },
        type: 'password',
      },
    ],
  },
];
