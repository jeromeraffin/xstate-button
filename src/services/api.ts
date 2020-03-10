export async function getCharacters() {
  await new Promise(function(resolve) {
    setTimeout(resolve, 2500);
  });
  const response = await fetch(
    "https://rickandmortyapi.com/api/character/"
  ).then(response => response.json());

  return response;
}

export function getError() {
  return new Promise((_resolve, reject) => {
    setTimeout(() => {
      reject("fail promise");
    }, 2000);
  });
}
