export default function PokemonDetails({ id }) {
    const [pokemon, setPokemon] = useState(null);

    useEffect(() => {
        const fetchPokemonDetails = async () => {
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
            const data = await response.json();
            setPokemon(data);
        };

        if (id) {
            fetchPokemonDetails();
        }
    }, [id]);

    if (!pokemon) {
        return <ActivityIndicator size="large" />;
    }

    return (
        <View>
            <Text>{pokemon.name}</Text>
            <Image source={{ uri: pokemon.sprites.front_default }} />
            {/* Affichez d'autres détails ici */}
        </View>
    );
}