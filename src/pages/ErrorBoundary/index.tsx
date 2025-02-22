import { lazy } from 'react'

export const ErrorBoundary = lazy(() => import('./ErrorBoundary').then((module) => ({ default: module.ErrorBoundary })))
