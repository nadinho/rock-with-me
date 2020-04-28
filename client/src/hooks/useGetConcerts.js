import React from "react";
import { getConcerts } from "../api/concerts";

export default function useGetArticles() {
  const [concerts, setConcerts] = React.useState(false);

  React.useEffect(() => {
    getConcerts().then((fetchedConcerts) => {
      setConcerts(fetchedConcerts);
    });
  }, []);

  return concerts;
}
