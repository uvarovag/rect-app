import { Link } from 'react-router'
import { usePokemonsQuery } from 'entities/pokemon'

export const Pokemons = () => {
    const { data } = usePokemonsQuery('')
    return (
        <>
            <h2>Pokemons Page</h2>
            <ul>
                {data?.results.map(({ name }) => (
                    <li key={name}>
                        <Link to={name}>{name}</Link>
                    </li>
                ))}
            </ul>
        </>
    )
}
