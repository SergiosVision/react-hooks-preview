import React, {createContext, useCallback, useContext, useState} from 'react'

import Button from '../common/Button/Button'
import CodeBlock from '../common/codeBlock/CodeBlock'

const cx = require('classnames/bind').bind(require('./styles/use-context.module.sass'))

const codeText = `
    const themes = {
        light: {
            background: '#fff',
            color: 'rgb(40, 44, 52)',
            button: {
                background: 'rgb(40, 44, 52)',
                color: '#f3f3f3'
            }
        },
        dark: {
            background: '#282c34',
            color: '#f3f3f3',
            button: {
                background: '#61dafb',
                color: 'rgb(40, 44, 52)'
            }
        }
    }

    const ThemeCtx = createContext(themes.light)
    
    const useThemeCtx = () => useContext(ThemeCtx)

    const ThemedButton: React.FC = () => {
        const {button} = useThemeCtx()
    
        return (
            <Button style={button}>Button styled by theme ctx.</Button>
        )
    }

    const ThemedText: React.FC = () => {
        const {color} = useThemeCtx()
    
        return <div style={{color}}>
            Themed Text
        </div>
    }
    
    const ToolBar: React.FC = () => {
        const {background} = useThemeCtx()
    
        return (
            <div style={{background}} className={cx('tool-bar')}>
                <ThemedButton/>
                <ThemedText/>
            </div>
        )
    }

    const Example: React.FC = () => {
        const [theme, setTheme] = useState(themes.light)
    
        const changeTheme = useCallback(() => {
            setTheme(theme === themes.light ? themes.dark : themes.light)
        }, [theme])
    
        return (
            <ThemeCtx.Provider value={theme}>
                <div>
                    <ToolBar/>
                    <Button onClick={changeTheme}>Change theme on {theme === themes.light ? 'dark' : 'light'}</Button>
                </div>
            </ThemeCtx.Provider>
        )
    }
`

const themes = {
    light: {
        background: '#fff',
        color: 'rgb(40, 44, 52)',
        button: {
            background: 'rgb(40, 44, 52)',
            color: '#f3f3f3'
        }
    },
    dark: {
        background: '#282c34',
        color: '#f3f3f3',
        button: {
            background: '#61dafb',
            color: 'rgb(40, 44, 52)'
        }
    }
}

const ThemeCtx = createContext(themes.light)

const useThemeCtx = () => useContext(ThemeCtx)

const ThemedButton: React.FC = () => {
    const {button} = useThemeCtx()

    return (
        <Button style={button}>Button styled by theme ctx.</Button>
    )
}

const ThemedText: React.FC = () => {
    const {color} = useThemeCtx()

    return <div style={{color}}>
        Themed Text
    </div>
}

const ToolBar: React.FC = () => {
    const {background} = useThemeCtx()

    return (
        <div style={{background}} className={cx('tool-bar')}>
            <ThemedButton/>
            <ThemedText/>
        </div>
    )
}

const Example: React.FC = () => {
    const [theme, setTheme] = useState(themes.light)

    const changeTheme = useCallback(() => {
        setTheme(theme === themes.light ? themes.dark : themes.light)
    }, [theme])

    return (
        <>
            <ThemeCtx.Provider value={theme}>
                <div>
                    <ToolBar/>
                    <Button onClick={changeTheme}>Change theme on {theme === themes.light ? 'dark' : 'light'}</Button>
                </div>
            </ThemeCtx.Provider>
            <br/>
            <CodeBlock code={codeText}/>
        </>
    )
}

export default Example