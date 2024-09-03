import {config} from "../config/config"
export const fetchQueue = async (queueName: any) => {
    const response = await  fetchOnPort(`${queueName}`, "GET")
    const data =  await response.json()
    return data
}
export const postQueue = async (queueName: any, message: any) => {
    return await postReq(`${queueName}`,  {Message:message})
}
const fetchOnPort = (url: string, method?: string, data?: any) => {
    console.log(`${config.server.url}${url}`);
    return fetch(`${config.server.url}${url}`, {
      method: method ?? "GET",
      credentials: "include",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
  };
  export enum Request_status {
    succeed,
    failed,
  }
  export const postReq = async <T>(
    url: string,
    data: any
  ): Promise<{ status: Request_status; response?: T }> => {
    return fetchOnPort(url, "POST", data)
      .then((response) => {
        if (response.ok) {
          return {
            status: Request_status.succeed,
            response: data,
          };
        }
        return { status: Request_status.failed, response: undefined };
      })
      .catch((error) => {
        console.log(error);
        return { status: Request_status.failed, response: undefined };
      });
  };