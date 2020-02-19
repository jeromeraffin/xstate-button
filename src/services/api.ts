export async function getCharacters() {
  setTimeout(() => {}, 1000);
  const response = await fetch(
    "https://rickandmortyapi.com/api/character/?status=unknown"
  ).then(response => response.json());

  return response;
}
