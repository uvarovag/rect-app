import { lazy } from 'react'

export const Loading = lazy(() => import('./Loading').then((module) => ({ default: module.Loading })))
