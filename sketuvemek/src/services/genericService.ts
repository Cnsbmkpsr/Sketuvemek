import axiosConfig from "./helpers/api.helpers";

enum MethodType {
  GET = "get",
  POST = "post",
  PUT = "put",
  DELETE = "delete",
  GET_ID = "getId",
}

export async function useService(method: string, endpoint: string, fields?: object[],  id?: string, data?: object)  {
  let response = null;
  let error = null;
  let filters = "?";

  if(fields) {
    Object.keys(fields).map(field => {
      filters += `${field}=${fields[field]}`;
    })

    filters = filters.slice(0,-1);
  }

  try {
    switch(method) {
      case MethodType.GET:
        response = await axiosConfig.get(`${endpoint}${filters}`);
        break;
      case MethodType.GET_ID:
        response = await axiosConfig.get(`${endpoint}/${id}`);
        break;
      case MethodType.POST:
        response = await axiosConfig.post(`${endpoint}${id}`, {data});
        break;
      case MethodType.PUT:
        response = await axiosConfig.put(`${endpoint}/${id}`, {data});
        break;
      case MethodType.DELETE:
        response = await axiosConfig.delete(`${endpoint}/${id}`);
        break;
      default:
        return {response, error};
    }
  } catch(err: any) {
    error = err;
  }

  return {response, error};

};