import { forwardRef } from 'react';

const SvgMock = forwardRef<HTMLDivElement>((props, ref) => (
  <div ref={ref} {...props} />
));

export default SvgMock;
