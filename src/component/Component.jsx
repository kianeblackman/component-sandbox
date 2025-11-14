const buttonConfig = {
  label: "Hello World!",
  leftIcon: null,
  rightIcon: null,
  variant: "primary",
  disabled: false,
};

import "./component.scss";

const Button = (props) => {
  const config = { ...buttonConfig, ...props };

  return (
    <button className={`btn btn--${config.variant}`} disabled={config.disabled} {...props}>
      {config.leftIcon && <span className="btn__icon btn__icon--left">{config.leftIcon}</span>}
      {config.label && <span className="btn__text">{config.label}</span>}
      {config.rightIcon && <span className="btn__icon btn__icon--right">{config.rightIcon}</span>}
    </button>
  );
};

export default Button;
