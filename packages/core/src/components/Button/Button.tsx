import { useButtonTitle } from '@example/utils';

export const Button = () => {
  const title = useButtonTitle();

  return <button>{title}</button>;
};
