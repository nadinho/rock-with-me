export async function postConcert(concert) {
  const response = await fetch("/api/concerts", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(concert),
    Encrypt: "true",
  });
  const createdConcert = await response.json();
  return createdConcert;
}

export async function getConcert(concertId) {
  const response = await fetch(`/api/concerts/${concertId}`);
  const concert = await response.json();
  return concert;
}

export async function getConcerts() {
  const response = await fetch(`/api/concerts`);
  if (!response.ok) {
    throw new Error(
      "Oh snap! 🤬",
      response.statusText,
      "Pls refresh the page 🙃"
    );
  }
  const concerts = await response.json();
  return concerts;
}

export function patchConcert(concertId, updates) {
  fetch(`/api/concerts/${concertId}`, {
    method: "PATCH",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(updates),
  });
}
