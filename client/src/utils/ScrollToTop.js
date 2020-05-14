import React from "react";

export default function ScrollToTop() {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return null;
}
