export async function postConcert(concert) {
  const response = await fetch("/api/concerts", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(concert),
  });
  if (!response.ok) {
    const errorMessage = await response.text();
    throw new Error(errorMessage);
  }
  const createdConcertId = await response.json();
  return createdConcertId;
}

export async function getConcert(concertId) {
  const response = await fetch(`/api/concerts/${concertId}`);
  if (!response.ok) {
    const errorMessage = await response.text();
    throw new Error(errorMessage);
  }
  const concert = await response.json();
  return concert;
}

export async function getConcerts() {
  const response = await fetch(`/api/concerts`);
  // if (!response.ok) {
  //   throw new Error("Bitte lade die Seite neu", response.statusText);
  // }
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
