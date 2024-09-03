import {config} from "../config/config"
export const fetchQueue = async (queueName: any) => {
    fetchOnPort(`${queueName}`, "GET")
}
export const postQueue = async (queueName: any, message: any) => {
    fetchOnPort(`${queueName}`, "POST", {message})
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