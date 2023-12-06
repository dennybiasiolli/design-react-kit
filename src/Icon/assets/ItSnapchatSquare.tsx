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
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <path
        clipRule='evenodd'
        d='M3.567 1.333h16.762a2.286 2.286 0 0 1 2.286 2.286v16.762a2.286 2.286 0 0 1-2.286 2.286H3.567a2.286 2.286 0 0 1-2.286-2.286V3.619a2.286 2.286 0 0 1 2.286-2.286Zm15.812 13.594c.24.134.453.296.564.599.124.338.048.721-.256 1.047l-.004.005c-.123.136-.268.25-.43.336-.32.176-.66.311-1.013.404a.625.625 0 0 0-.19.086c-.06.054-.085.12-.117.204-.024.062-.05.134-.1.217a1.14 1.14 0 0 1-.336.368c-.33.229-.702.243-1.095.258H16.4c-.354.013-.757.029-1.216.18-.185.062-.382.183-.61.322l-.001.001c-.555.34-1.314.805-2.574.805-1.261 0-2.015-.463-2.566-.802-.23-.142-.427-.264-.618-.327-.46-.152-.862-.167-1.217-.18-.394-.016-.765-.03-1.095-.258a1.136 1.136 0 0 1-.296-.301c-.077-.111-.112-.205-.142-.284-.031-.084-.056-.15-.117-.203a.66.66 0 0 0-.202-.09 4.43 4.43 0 0 1-1-.401 1.62 1.62 0 0 1-.409-.31c-.324-.332-.407-.727-.28-1.074.144-.393.457-.55.786-.714l.17-.087c.727-.395 1.297-.89 1.695-1.472.114-.164.212-.338.295-.52.039-.106.038-.164.012-.218a.363.363 0 0 0-.11-.109 154.273 154.273 0 0 1-.71-.467c-.307-.215-.523-.445-.659-.701a1.399 1.399 0 0 1-.067-1.161c.204-.538.713-.872 1.329-.872a1.83 1.83 0 0 1 .486.064c-.005-.366.003-.756.036-1.138.116-1.343.587-2.048 1.077-2.61a4.277 4.277 0 0 1 1.097-.883C10.24 4.216 11.08 4 12 4c.92 0 1.764.216 2.509.641.41.232.78.53 1.095.881.49.562.96 1.266 1.077 2.61.033.382.04.77.035 1.139a1.829 1.829 0 0 1 .487-.065c.616 0 1.124.334 1.329.872a1.396 1.396 0 0 1-.07 1.16c-.134.256-.35.486-.659.702-.082.058-.21.14-.37.245-.091.058-.224.145-.353.23a.339.339 0 0 0-.096.1c-.025.052-.027.108.008.208.083.186.184.363.3.531.406.596.993 1.1 1.745 1.498l.115.058a11.162 11.162 0 0 1 .227.117Zm-1.496 1.558c.258-.069.564-.15.939-.357.435-.242.188-.391.042-.464-2.478-1.198-2.873-3.05-2.89-3.189a.965.965 0 0 0-.003-.017c-.02-.158-.037-.286.14-.45.121-.11.523-.371.836-.574.147-.095.275-.178.345-.227.36-.252.518-.503.402-.812-.082-.213-.28-.295-.49-.295a.91.91 0 0 0-.198.023c-.233.05-.462.14-.657.216-.135.053-.254.1-.345.121a.348.348 0 0 1-.082.011c-.118 0-.161-.053-.152-.195l.003-.047c.029-.444.082-1.257.016-2.018-.093-1.085-.443-1.623-.859-2.098-.2-.228-1.14-1.214-2.932-1.214s-2.73.99-2.93 1.219c-.414.475-.764 1.013-.858 2.097-.062.725-.016 1.497.012 1.953l.007.113c.008.135-.034.195-.152.195a.353.353 0 0 1-.082-.01 3.032 3.032 0 0 1-.344-.122c-.195-.076-.425-.166-.658-.217a.916.916 0 0 0-.197-.022c-.209 0-.408.08-.49.295-.117.309.042.56.402.812.07.049.198.132.345.227.314.203.715.463.835.575.178.163.161.291.14.45 0 .005 0 .01-.002.016-.017.137-.412 1.99-2.89 3.189-.145.07-.392.219.044.46.373.204.678.285.936.354.214.057.395.105.556.208.162.105.185.274.206.432.018.134.035.26.135.329.116.08.331.088.62.1.38.014.885.033 1.464.225.291.096.544.25.81.414.52.32 1.09.67 2.094.67 1.008 0 1.585-.354 2.106-.673.263-.162.513-.315.797-.41.58-.19 1.086-.21 1.464-.225.29-.01.504-.019.62-.1.1-.068.117-.194.135-.328.021-.157.044-.327.206-.432.16-.103.341-.151.554-.208Z'
      />
    </svg>
  );
};
