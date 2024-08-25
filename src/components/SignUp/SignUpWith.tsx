import React from 'react';
import styles from './SignUp.module.css';

interface SignUpWithProps {
  Icon: React.ComponentType<{ size?: number }>;
  size?: number;
}

const SignUpWith: React.FC<SignUpWithProps> = ({ Icon, size = 30 }) => {
  return (
    <div className={`${styles.container} d-flex justify-content-center align-items-center`}>
      <Icon size={size} />
    </div>
  );
};

export default SignUpWith;
