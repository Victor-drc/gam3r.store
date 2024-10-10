import { useCallback } from "react";

const baseUrl = process.env.API_URL;

export default function useAPI() {
  const httpGet = useCallback(async function (route: string) {
    const uri = route.startsWith("/") ? route : `/${route}`;
    const completeUrl = `${baseUrl}${uri}`;

    const response = await fetch(completeUrl);
    return getData(response);
  }, []);

  const httpPost = useCallback(async function (route: string, body: any) {
    const uri = route.startsWith("/") ? route : `/${route}`;
    const completeUrl = `${baseUrl}${uri}`;

    const response = await fetch(completeUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
    return getData(response);
  }, []);

  async function getData(response: Response) {
    let responseData = "";
    try {
      responseData = await response.text();
      return JSON.parse(responseData);
    } catch (e) {
      return responseData;
    }
  }

  return { httpGet, httpPost };
}
