import * as React from 'react';
import { SVGProps } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const component = ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps) => {
  return (
    <svg
      width={24}
      height={24}
      viewBox='0 0 24 24'
      xmlns='http://www.w3.org/2000/svg'
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <path
        d='M13.927 10.491 19.511 4h-1.323l-4.849 5.636L9.467 4H5l5.856 8.523L5 19.33h1.323l5.12-5.952 4.09 5.952H20l-6.073-8.839Zm-1.812 2.107-.594-.849-4.72-6.753h2.032l3.81 5.45.593.849 4.953 7.084h-2.033l-4.041-5.78v-.001Z'
        fill='#000'
      />
    </svg>
  );
};
