import { lazy } from 'react'

export const Object = lazy(() => import('./Object').then((module) => ({ default: module.Object })))
