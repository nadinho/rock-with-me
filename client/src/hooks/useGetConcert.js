import React from "react";
import { getConcert } from "../api/concerts";

export default function useGetConcert(concertId) {
  const [concert, setConcert] = React.useState(null);
  const [isLoading, setIsLoading] = React.useState(true);
  const [errorMessage, setErrorMessage] = React.useState(false);

  React.useEffect(() => {
    async function doGetConcert() {
      try {
        setIsLoading(true);
        const concert = await getConcert(concertId);
        setConcert(concert);
        setIsLoading(false);
      } catch (error) {
        setErrorMessage(error.message);
      }
    }
    doGetConcert();
  }, [concertId]);

  return { concert, isLoading, errorMessage };
}
