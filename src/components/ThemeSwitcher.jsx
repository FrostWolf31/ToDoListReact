import { useState,useEffect } from 'react';
import styles from './ThemeSwitcher.module.css';
import { XMarkIcon, SunIcon, MoonIcon, SwatchIcon } from '@heroicons/react/24/solid';

//hook
import useLocalStorage from '../hooks/useLocalStorage';

export const ThemeSwitcher = () => {
    const defaultDark = window.matchMedia('(perfers-color-scheme:dark)').matches
    const [theme, setTheme] = useLocalStorage('react-todo.theme', defaultDark ? 'dark' : 'light')
    const [isColorPicking, setIsColorPicking] = useState(false)
    const [hue,setHue] = useLocalStorage('react-todo.color','240')

    const handleThemeButton = () => setTheme(theme === 'light' ? 'dark': 'light')

    useEffect(()=> {
        document.documentElement.setAttribute('color-scheme', theme);

    }, [theme])

    useEffect(()=> {
        document.documentElement.style.setProperty('--_hue', hue)

    }, [hue])

  
  return (
    <aside
    className={styles.wrapper}
    style={{
        backgroundColor: isColorPicking ? 'hsl(var(--muted)/.6)' : 'transparent'

    }}
    >
       {
        isColorPicking
            ?(
                <>
                <button className={`btn ${styles.close}`} aria-label='Close color mode' onClick={() => setIsColorPicking(false)}>
                <XMarkIcon/>
                </button>
                <input 
                type ='range'
                className={styles.picker} 
                min='0'
                max='360'
                aria-label='Chanage color theme slider'
                value={hue}
                onInput={(e)=> setHue(e.target.value)}
                ></input>
                </>
            )
            :(
                <div className={styles.btns}>
                    <button className='btn' aria-label={`Change theme to ${theme === "light" ? "dark" : "light"} mode`} role='switch' onClick={handleThemeButton}>
                    {theme === 'dark' ? <SunIcon/> : <MoonIcon/>} 
                    </button>

                    <button className='btn' aria-label='Enable color picking mode' onClick={()=> setIsColorPicking(true)}>
                    <SwatchIcon/>
                    </button>
                </div>
            )

       }
    </aside>
  )
}

export default ThemeSwitcher