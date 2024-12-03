import { RouteObject } from 'react-router'

import { Providers } from 'app/providers'
import { Pokemon } from 'pages/Pokemon'
import { Pokemons } from 'pages/Pokemons'

export const routes: RouteObject[] = [
    {
        element: <Providers />,
        children: [
            {
                index: true,
                element: <Pokemons />,
            },
            {
                path: ':pokemonId',
                element: <Pokemon />,
            },
        ],
    },
]
