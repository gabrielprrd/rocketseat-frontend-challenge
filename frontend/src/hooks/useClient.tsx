import { useEffect, useState } from "react";

// To prevent hydration errors
export default function useClient() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return { isClient };
}
