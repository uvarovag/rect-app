import { useNavigate } from 'react-router'

export const NotFound = () => {
    const navigate = useNavigate()
    return (
        <>
            <h2>Not Found Page - 404 😢</h2>
            <button onClick={() => navigate(-1)}>back</button>
        </>
    )
}
