import type { PropsWithChildren } from 'react'

import { Suspense } from 'react'
import { Provider } from 'react-redux'

import { store } from 'app/model'
import { Loading } from 'pages/Loading'

export const Providers = ({ children }: PropsWithChildren) => (
    <Suspense fallback={<Loading />}>
        <Provider store={store}>{children}</Provider>
    </Suspense>
)
