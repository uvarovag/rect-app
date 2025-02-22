import { ErrorBoundary } from 'pages/ErrorBoundary'
import { Layout } from 'pages/Layout'
import { List } from 'pages/List'
import { NotFound } from 'pages/NotFound'
import { Object } from 'pages/Object'

import type { RouteObject } from 'react-router'

export const routes: RouteObject[] = [
    {
        element: <Layout />,
        errorElement: <ErrorBoundary />,
        children: [
            {
                index: true,
                element: <List />,
            },
            {
                path: ':objectId',
                element: <Object />,
            },
            {
                path: '*',
                element: <NotFound />,
            },
        ],
    },
]
