import s from './FormWrapper.module.scss';

interface Props {
  children: React.ReactNode;
  onSubmit: () => void;
}

export const FormWrapper: React.FC<Props> = ({ children, onSubmit }) => {
  return (
    <form noValidate onSubmit={onSubmit} className={s.FormWrapper}>
      {children}
    </form>
  );
};
