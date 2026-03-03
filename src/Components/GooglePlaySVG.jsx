import React from "react";

const GooglePlaySVG = () => {
  const GooglePlayMulticolor = ({ size = "24px" }) => (
    <svg width={size} height={size} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <path d='M3.609 20.88C3.381 21.108 3 20.947 3 20.625V3.375C3 3.053 3.381 2.892 3.609 3.12L12.489 12L3.609 20.88Z' fill='#4285F4' />
      <path d='M17.511 12.879L12.489 12L3.609 3.12C3.766 3.044 3.948 3 4.144 3C4.464 3 4.767 3.12 4.996 3.349L17.511 11.121C18.163 11.531 18.163 12.469 17.511 12.879Z' fill='#34A853' />
      <path d='M17.511 11.121L4.996 18.651C4.767 18.88 4.464 19 4.144 19C3.948 19 3.766 18.956 3.609 18.88L12.489 12L17.511 11.121Z' fill='#FBBC05' />
      <path d='M12.489 12L3.609 20.88C3.766 20.956 3.948 21 4.144 21C4.464 21 4.767 20.88 4.996 20.651L17.511 12.879C18.163 12.469 18.163 11.531 17.511 11.121L12.489 12Z' fill='#EA4335' />
    </svg>
  );
  return (
    <div>
      <GooglePlayMulticolor />
    </div>
  );
};

export default GooglePlaySVG;
