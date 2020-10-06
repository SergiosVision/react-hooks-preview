import React, {useEffect, useState} from 'react'

import Card from '../common/Card/Card'
import Button from '../common/Button/Button'
import CodeBlock from '../common/codeBlock/CodeBlock'

interface Post {
    title: string
    body: string
    id: number
}

interface PostProps extends Omit<Post, 'id'> {}

const Post: React.FC<PostProps> = ({title, body}) => {
    return (
        <Card>
            <span className='card-title'>{title}</span>
            <p>{body}</p>
        </Card>
    )
}

const requestsPosts = async (): Promise<Post[]> => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts/')

    const resJson = await res.json()

    return (Array.isArray(resJson) ? resJson : [resJson]) as Post[]
}

const codeText = `
    interface Post {
        title: string
        body: string
        id: number
    }

    interface PostProps extends Omit<Post, 'id'> {}
    
    const Post: React.FC<PostProps> = ({title, body}) => {
        return (
            <Card>
                <span className='card-title'>{title}</span>
                <p>{body}</p>
            </Card>
        )
    }

    const requestsPosts = async (): Promise<Post[]> => {
        const res = await fetch('https://jsonplaceholder.typicode.com/posts/')
    
        const resJson = await res.json()
    
        return (Array.isArray(resJson) ? resJson : [resJson]) as Post[]
    }

    const Example: React.FC = () => {
        const [posts, setPosts] = useState<Post[]>([])
        const [isFetching, setFetching] = useState<boolean>(false)
        const [count, setCount] = useState<number>(0)
    
        useEffect(() => {
            (async () => {
                setFetching(true)
    
                try {
                    const res = await requestsPosts()
    
                    setPosts(res.slice(0, 3))
                } finally {
                    setFetching(false)
                }
            })()
        }, [count])
    
        if (isFetching) return <h2 className='center'>Loading...</h2>
    
        return (
            <div>
                {posts.map(({title, body}, index) => <Post key={index} title={title} body={body}/>)}
                <br/>
                <div>
                    <div>Count: {count}</div>
                    <Button onClick={() => setCount(count => count + 1)}>+</Button>
                </div>
            </div>
        )
    }
`

const Example: React.FC = () => {
    const [posts, setPosts] = useState<Post[]>([])
    const [isFetching, setFetching] = useState<boolean>(false)
    const [count, setCount] = useState<number>(0)

    useEffect(() => {
        (async () => {
            setFetching(true)

            try {
                const res = await requestsPosts()

                setPosts(res.slice(0, 3))
            } finally {
                setFetching(false)
            }
        })()
    }, [count])

    if (isFetching) return <h2 className='center'>Loading...</h2>

    return (
        <div>
            {posts.map(({title, body}, index) => <Post key={index} title={title} body={body}/>)}
            <br/>
            <div>
                <div>Count: {count}</div>
                <Button onClick={() => setCount(count => count + 1)}>+</Button>
            </div>
            <br/>
            <CodeBlock code={codeText}/>
        </div>
    )
}

export default Example