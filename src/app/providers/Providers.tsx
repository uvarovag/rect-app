import { Outlet } from 'react-router'
import { Navbar } from 'widgets/Navbar'

export const Providers = () => (
    <>
        <h1>Animals app</h1>
        <Navbar />
        <Outlet />
    </>
)
