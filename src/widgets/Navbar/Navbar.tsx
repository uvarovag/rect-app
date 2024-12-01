import { Link } from 'react-router'

const Navbar = () => (
    <ul>
        <li>
            <Link to="/animals/cats">cats</Link>
        </li>
        <li>
            <Link to="/animals/dogs">dogs</Link>
        </li>
    </ul>
)

export default Navbar
