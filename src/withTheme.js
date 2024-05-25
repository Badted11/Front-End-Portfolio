import React from 'react';
import { useTheme } from './ThemeContext';

const withTheme = (WrappedComponent) => {
    const ThemedComponent = (props) => {
        const { theme, toggleTheme } = useTheme();
        return <WrappedComponent {...props} theme={theme} toggleTheme={toggleTheme} />;
    };
    return ThemedComponent;
};

export default withTheme;
