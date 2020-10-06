import {useState, useEffect} from 'react'

interface ReturnValues {
    width: number
    height: number
}

const useWindowSize = (): ReturnValues => {
    const [windowSize, setWindowSize] = useState<ReturnValues>({
        width: 0,
        height: 0
    })

    const resize = (): void => {
        setWindowSize({
            width: window.innerWidth,
            height: window.innerHeight
        })
    }

    useEffect(() => {
        window.addEventListener('resize', resize)

        resize()

        return () => {
            window.removeEventListener('resize', resize)
        }
    }, [])

    return windowSize
}

export default useWindowSize