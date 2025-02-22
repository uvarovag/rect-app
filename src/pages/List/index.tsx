import { lazy } from 'react'

export const List = lazy(() => import('./List').then((module) => ({ default: module.List })))
