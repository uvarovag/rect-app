import { useState } from 'react'
import { Link } from 'react-router'

export const Navbar = () => {
    const [isError, setError] = useState(false)
    if (isError) {
        throw new Error('test error')
    }
    return (
        <ul>
            <li>
                <Link to="/">main</Link>
            </li>
            <li>
                <Link to="/not/found">404</Link>
            </li>
            <li>
                <button onClick={() => setError(true)}>try error</button>
            </li>
        </ul>
    )
}
