import { Text, View, StyleSheet, Image, FlatList, ActivityIndicator } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useState, useMemo } from "react"; // Ajout de useMemo pour optimiser
import ThemedText from "../app/components/ThemedText";
import { useThemeColors } from "@/hook/useThemeColors";
import Card from "../app/components/Card";
import PokemonCards from "@/app/components/pokemon/PokemonCards";
import { useInfiniteFetchQuery } from "@/hook/useFetchQuery";
import getPokemonId from "@/app/functions/pokemon";
import SearchBar from "./components/SearchBar";
import Row from "./components/Row";

export default function Index() {
  const colors = useThemeColors();
  const { data, isFetching, fetchNextPage } = useInfiniteFetchQuery("/pokemon?limit=21");
  const pokemons = data?.pages.flatMap(page => page.results) ?? [];
  const [search, setSearch] = useState("");

  // Optimisation du filtrage avec useMemo
  const filteredPokemons = useMemo(() => 
    pokemons.filter(pokemon => 
      pokemon.name.toLowerCase().includes(search.trim().toLowerCase())
    ), [pokemons, search]);

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: colors.tint }]}>
      {/* Header */}
      <Row style={styles.header} gap={12}>
        <Image source={require("../assets/images/pokeball.png")} style={styles.icon} />
        <ThemedText variant="headline" color="grayLight">Pokédex</ThemedText>
      </Row>

      {/* SearchBar */}
      <View style={styles.searchContainer}>
        <SearchBar value={search} onChange={setSearch} />
      </View>

      {/* Liste des Pokémons */}
      <Card style={styles.body}>
        {filteredPokemons.length === 0 ? (
          <ThemedText color="grayLight">Aucun Pokémon trouvé</ThemedText>
        ) : (
          <FlatList
            data={filteredPokemons} // Utilisation des Pokémon filtrés
            numColumns={3}
            contentContainerStyle={[styles.gridGap, styles.list]}
            columnWrapperStyle={styles.gridGap}
            ListFooterComponent={isFetching && !search ? <ActivityIndicator color={colors.tint} /> : null}
            onEndReached={!search ? fetchNextPage : null} // Désactiver la pagination en mode recherche
            onEndReachedThreshold={0.5} // Ajout de seuil de pagination pour meilleure performance
            renderItem={({ item }) => (
              <PokemonCards id={getPokemonId(item.url)} name={item.name} style={{ flex: 1 / 3 }} />
            )}
            keyExtractor={(item) => item.url}
          />
        )}
      </Card>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 4,
  },
  header: {
    gap: 16,
    padding: 12,
    alignItems: "center",
  },
  searchContainer: {
    paddingHorizontal: 12,
    marginBottom: 12, // Ajout d'un espace pour qu'il ne soit pas collé
  },
  body: {
    flex: 1,
  },
  gridGap: {
    gap: 8,
  },
  list: {
    padding: 12,
  },
  icon: {
    width: 24,
    height: 24,
  }
});
