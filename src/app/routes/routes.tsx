import { Providers } from 'app/providers'
import { Cats } from 'pages/Cats'
import { Dogs } from 'pages/Dogs'
import { RouteObject } from 'react-router'

export const routes: RouteObject[] = [
    {
        path: '/animals',
        element: <Providers />,
        children: [
            {
                path: 'cats',
                element: <Cats />,
            },
            {
                path: 'dogs',
                element: <Dogs />,
            },
        ],
    },
]
