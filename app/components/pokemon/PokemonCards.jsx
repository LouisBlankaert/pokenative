import { View, Text, Pressable, StyleSheet, Image } from 'react-native';
import { Link } from 'expo-router'; // Import de Link pour la navigation
import Card from '@/app/components/Card';
import ThemedText from '@/app/components/ThemedText';
import { useThemeColors } from '@/hook/useThemeColors';

export default function PokemonCards({style, id, name}) {
    const colors = useThemeColors();

    return (
        <Link href={{ pathname: `/about/${id}` }} asChild>
        <Pressable style={style}>
            <Card style={[styles.card]}>
                <ThemedText style={styles.id} variant="caption" color="grayMedium">
                    #{id.toString().padStart(3, "0")}
                </ThemedText>
                <Image 
                    source={{uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`}}
                    width={72}
                    height={72}
                />
                <ThemedText>{name}</ThemedText>
                <View style={[styles.shadow, {backgroundColor: colors.grayBackground}]} />
            </Card>
        </Pressable>
    </Link>

    );
}

const styles = StyleSheet.create({
    card: {
        position: "relative",
        alignItems: "center",
        padding: 4,
    },
    id: {
        alignSelf: "flex-end",
    },
    shadow: {
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        height: 44,
        borderRadius: 7,
        zIndex: -1,
    }
});
