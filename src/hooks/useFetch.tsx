import { useState } from "react";

export default function useFetch(asyncFunction: any) {
  const [isRequested, setIsRequested] = useState(false);
  const [error, setError] = useState<any>(null);

  const useFetchManager = async (...items: any) => {
    try {
      setError(null);
      setIsRequested(true);
      return await asyncFunction(...items);
    } catch (error: any) {
      setError(error);
      return;
    } finally {
      setIsRequested(false);
    }
  };

  return [isRequested, error, useFetchManager];
}
