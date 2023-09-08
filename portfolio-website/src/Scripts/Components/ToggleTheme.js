import { ThemeContext } from '../Contexts/ThemeContext';
import { Themes } from '../Datas/Themes';
import Tooltip from './Tooltip';
import '../../Styles/Components/ToggleTheme.css';

const ToggleTheme = () => (
    <label className='container'>
        <ThemeContext.Consumer>
            {themeContext => {
                let isDark = themeContext.theme === Themes.dark;
                return (
                    <Tooltip content={isDark ? 'Change to light mode' : 'Change to dark mode'} delay='0.5s' stepHeight='1rem'>
                        <input
                            type='checkbox'
                            defaultChecked={!isDark}
                            onChange={() => {
                                if (isDark)
                                    themeContext.setTheme(Themes.light);
                                else
                                    themeContext.setTheme(Themes.dark);
                            }}
                        />
                        <div />
                    </Tooltip>
                )
            }}
        </ThemeContext.Consumer>
    </label>
);

export default ToggleTheme;
