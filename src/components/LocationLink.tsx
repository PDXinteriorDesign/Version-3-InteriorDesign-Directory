import React from 'react';
import { Link } from 'react-router-dom';
import { generateLocationPath } from '../utils/routes';

interface LocationLinkProps {
  state: string;
  city?: string;
  className?: string;
  children: React.ReactNode;
}

export const LocationLink: React.FC<LocationLinkProps> = ({
  state,
  city,
  className,
  children
}) => {
  const path = generateLocationPath(state, city);
  
  return (
    <Link to={path} className={className}>
      {children}
    </Link>
  );
};