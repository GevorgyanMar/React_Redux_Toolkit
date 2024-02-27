import React, { FC } from "react";
import "./style.scss";
type Props = {
  onClick: VoidFunction;
  label: string;
  isDisabled?: boolean;
  className?: string;
};

const Button: FC<Props> = ({ onClick, label, isDisabled, className }) => {
  return (
    <div className={`G-btn ${className}`}>
      <button onClick={onClick} disabled={isDisabled}>
        <p>{label}</p>
      </button>
    </div>
  );
};

export default Button;
