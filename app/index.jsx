import { Text, View, StyleSheet, Image, FlatList, ActivityIndicator } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Link } from "expo-router";
import { useState } from "react";
import ThemedText from "../app/components/ThemedText";
import { useThemeColors } from "@/hook/useThemeColors";
import Card from "../app/components/Card";
import PokemonCards from "@/app/components/pokemon/PokemonCards";
import { useFetchQuery, useInfiniteFetchQuery } from "@/hook/useFetchQuery";
import getPokemonId from "@/app/functions/pokemon";
import SearchBar from "./components/SearchBar";

export default function Index() {

  const colors = useThemeColors();
  const {data, isFetching, fetchNextPage} = useInfiniteFetchQuery("/pokemon?limit=21")
  const pokemons = data?.pages.flatMap(page => page.results) ?? []
  const [search, setSearch] = useState("")


  return (
    <SafeAreaView style={[styles.container, { backgroundColor: colors.tint }]}>
      <View style={styles.header}>
        <Image source={require("../assets/images/pokeball.png")} width={24} height={24} />
        <ThemedText variant="headline" color="grayLight">Pokédex</ThemedText>
      </View>
      <View>
        <SearchBar value={search} onChange={setSearch} />
      </View>
      <Card style={styles.body}>
        <FlatList
         data={pokemons} 
         numColumns={3}
         contentContainerStyle={[styles.gridGap, styles.list]}
         columnWrapperStyle={styles.gridGap}
         ListFooterComponent={
            isFetching ? <ActivityIndicator color={colors.tint} /> : null
         }
         onEndReached={fetchNextPage}
         renderItem={({ item }) => <PokemonCards id={getPokemonId(item.url)} name={item.name} style={{ flex: 1 / 3 }} />} keyExtractor={(item) => item.url}/>
      </Card>
    </SafeAreaView>
  );
}

styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 4
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    gap: 16,
    padding: 12,
  },
  body: {
    flex: 1,
  },
  gridGap: {
    gap: 8
  },
  list: {
    padding: 12,
  }
})