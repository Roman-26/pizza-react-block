import React from "react";
import classNames from "classnames";

const Button = ({onCli, className, outline, children}) => {
    return (
        <button
            onClick ={onCli}
            className = {classNames('button', className, {
                'button--outline': outline,
            })}>
                {children}
        </button>
    );
};

export default Button;