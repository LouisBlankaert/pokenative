export default function getPokemonId(url) {
    return parseInt(url.split("/").at(-2), 10)
}