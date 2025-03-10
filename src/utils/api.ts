import { getCookie } from "cookies-next";

const BASE_API_URL = "https://bootcamp-api.codeit.kr/api/linkbrary/v1/";

/**
 * @param endPoint baseURL 에서 추가로 요청할 정보의 경로를 적습니다.
 * @param requestInformation method가 GET이 아닐 경우 추가로 작성하여 request의 성질을 조절합니다.
 * @description 서버에 대한 Request 전반을 다루는 함수입니다.
 * @returns
 */
const acceptDataFromApi = async function (
  endPoint: string,
  requestMethod?: any,
) {
  const accessToken = getCookie("accessToken");
  const method = requestMethod || { method: "GET" };
  const authorizationMethod = Object.assign(method, {
    headers: { Authorization: accessToken, "Content-Type": "application/json" },
  });

  try {
    const response = await fetch(BASE_API_URL + endPoint, authorizationMethod);
    if (!response.ok) {
      throw new Error("정보를 받아오는데 실패하였습니다.");
    }
    if (requestMethod && requestMethod.method === "DELETE") return;
    const convertedResponse = await response.json();
    return convertedResponse;
  } catch (e: any) {
    console.error(e.message);
  }
};

export { acceptDataFromApi };
