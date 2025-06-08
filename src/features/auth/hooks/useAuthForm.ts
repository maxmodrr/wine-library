import { useForm, type FieldValues } from 'react-hook-form';

export const useAuthForm = <T extends FieldValues>() => {
  const {
    register,
    handleSubmit,
    formState: { errors, dirtyFields },
  } = useForm<T>({
    mode: 'onChange',
  });

  return { register, handleSubmit, errors, dirtyFields };
};
