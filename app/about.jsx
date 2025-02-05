import { useRouter } from 'expo-router';
import PokemonDetails from './components/PokemonDetails'; // Assurez-vous que le chemin est correct

export default function About() {
    const router = useRouter();
    const { id } = router.query; // Récupérer l'ID du Pokémon depuis l'URL

    return (
        <View>
            {id ? <PokemonDetails id={id} /> : <Text>Aucun Pokémon sélectionné</Text>}
        </View>
    );
}