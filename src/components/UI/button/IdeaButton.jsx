import React from 'react';
import classes from './IdeaButton.module.scss';

const IdeaButton = ({children, ...props}) => {
    return (
        <button {...props} className={classes.btns}>
            {children}
        </button>
    );
};

export default IdeaButton;