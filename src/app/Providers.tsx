import { Outlet } from 'react-router'
import Navbar from 'widgets/Navbar'

const Providers = () => (
    <>
        <h1>Animals app</h1>
        <Navbar />
        <Outlet />
    </>
)

export default Providers
