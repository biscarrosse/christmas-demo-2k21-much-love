/* eslint-disable react-hooks/exhaustive-deps */
// Next:
import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
// React:
import { useEffect, useState } from 'react'
// Layout:
import Error from '../common/components/Layouts/Error'

const NotFound = () => {
    const router = useRouter()
    const [count, setCount] = useState(5)

    useEffect(() => {
        const ID = setTimeout(() => {
            if (count > 0) {
                setCount(count - 1)
                console.log('count:', count)
            } else {
                router.push('/')
            }
        }, 1000)

        return () => {
            clearTimeout(ID)
        }
    }, [count])

    return (
        <div>
            <Head>
                <title>404 Not found</title>
                <meta name="404 Not found" content="404 Not found" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div>
                <h1>Ooops... 404</h1>
            </div>

            <div>
                <p>
                    Going back to the{' '}
                    <Link href="/">
                        <a>Homepage</a>
                    </Link>{' '}
                    in {count} seconds...
                </p>
            </div>
        </div>
    )
}

NotFound.PageLayout = Error

export default NotFound
