import { create } from "apisauce";

const apiClient = create({
    baseURL: "http://10.0.0.212:9000/api",
})

export default apiClient