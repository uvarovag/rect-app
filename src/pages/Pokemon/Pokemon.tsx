import { useParams } from 'react-router'

import { usePokemonQuery } from 'entities/pokemon'

export const Pokemon = () => {
    const { pokemonId } = useParams()
    const { data } = usePokemonQuery(pokemonId ?? '', { skip: !pokemonId })
    return (
        <>
            <h2>Pokemon Page</h2>
            <p>name: {data?.name}</p>
            <p>order: {data?.order}</p>
            <p>weight: {data?.weight}</p>
            <p>base experience: {data?.base_experience}</p>
        </>
    )
}
