import { Suspense } from 'react'
import { Provider } from 'react-redux'
import { Outlet } from 'react-router'

import { store } from 'app/model'
import { Navbar } from 'widgets/Navbar'

export const Providers = () => (
    <Suspense fallback="loading...">
        <Provider store={store}>
            <h1>React App</h1>
            <Navbar />
            <Outlet />
        </Provider>
    </Suspense>
)
