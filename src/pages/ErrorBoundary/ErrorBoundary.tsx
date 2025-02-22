import { Link } from 'react-router'

export const ErrorBoundary = () => (
    <>
        <h1>Error Page ⚠️</h1>
        <ul>
            <li>
                <Link to="/">main</Link>
            </li>
        </ul>
    </>
)
