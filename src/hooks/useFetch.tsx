import { useState } from "react";

/**
 * @description 로딩이 필요하거나 에러 처리가 필요한 곳에 사용할 예정인 hook 입니다. 현재는 큰 사용 용도가 없으며, folderPage의 로딩 처리에 사용하고 있습니다.
 * @param { function }asyncFunction 로딩 및 에러 처리가 필요한 함수입니다. 특별한 필요가 있는 것이 아니라 타입을 지정하기가 애매하네요.
 * @returns
 */
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
