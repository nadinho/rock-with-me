export async function postConcert(concerts) {
  const response = await fetch("http://localhost:4000/concerts", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(concerts),
  });
  await response.json();
}
