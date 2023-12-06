import * as React from 'react';
import { SVGProps } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const component = ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 24 24'
      xmlSpace='preserve'
      enableBackground='new 0 0 24 24'
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <path d='M12.8 22h-1.4v-2.1h1.4V22zm-.1-4.9h-1.2c-.1-.6-.1-1.1-.1-1.7 0-.4.1-.8.3-1.2.2-.5.4-.9.7-1.3l2.3-2.1c.7-.6 1.3-1.3 1.8-2.1.4-.7.5-1.5.5-2.3.1-1-.3-2-1.1-2.6-1-.6-2.2-.8-3.4-.7-1.2.1-2.4.2-3.6.5l-1 .3-.2-1.2h.1c1.5-.5 3.1-.7 4.7-.8 1.5-.1 3 .2 4.3 1 1 .9 1.5 2.2 1.4 3.5.1.9-.1 1.9-.5 2.7-.5.8-1.1 1.6-1.9 2.2-.6.5-1.2 1-1.8 1.6l-.9 1.2c-.3.4-.4.9-.4 1.4v1.6z' />
    </svg>
  );
};
