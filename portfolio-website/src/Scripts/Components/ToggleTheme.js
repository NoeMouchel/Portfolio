import React from 'react';
import '../../Styles/ToggleTheme.css';

const ToggleTheme = ({
    isDark,
    onChange
}) => (
    <label
        className='container'
        title={isDark ? 'Activate light mode' : 'Activate dark mode'}
        aria-label={isDark ? 'Activate light mode' : 'Activate dark mode'}
    >
        <input
            type='checkbox'
            defaultChecked={!isDark}
            onChange={onChange}
        />
        <div />
    </label>
);

export default ToggleTheme;
