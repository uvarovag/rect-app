import Providers from 'app/Providers'
import Cats from 'pages/Cats'
import Dogs from 'pages/Dogs'
import { RouteObject } from 'react-router'

const routes: RouteObject[] = [
    {
        path: '/animals',
        element: <Providers />,
        children: [
            {
                path: '/animals/cats',
                element: <Cats />,
            },
            {
                path: '/animals/dogs',
                element: <Dogs />,
            },
        ],
    },
]

export default routes
