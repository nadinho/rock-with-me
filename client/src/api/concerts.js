export async function postConcert(concerts) {
  const response = await fetch("/api/concerts", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(concerts),
    Encrypt: "true",
  });
  const createdConcert = await response.json();
  return createdConcert;
}

// User should be redirect to created concert

export async function getConcert(concertId) {
  const response = await fetch(`/api/concerts/${concertId}`);
  const concert = await response.json();
  return concert;
}

export async function getConcerts() {
  const response = await fetch(`/api/concerts`);
  if (!response.ok) {
    throw new Error("Oooops", response.statusText);
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
