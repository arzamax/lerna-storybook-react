import { ButtonTitle, useButtonTitle } from '@example/utils';

export const Button = (props: ButtonTitle) => {
  const title = useButtonTitle();

  return <button>{title}</button>;
};
