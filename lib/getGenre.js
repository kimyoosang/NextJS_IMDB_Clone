const { BASE_URL } = process.env;

export default async function getGenre(props) {
  const request = await fetch(`${BASE_URL}/3${props}`).then((res) =>
    res.json()
  );
  return request;
}
