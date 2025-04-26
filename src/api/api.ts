import axios from "axios";

const BASE_URL = "https://680c7f0a2ea307e081d41b56.mockapi.io/API";

export const getTrees = async () => {
  const response = await axios.get(`${BASE_URL}/trees`);
  return response.data;
};

export const getTreeById = async (id: string) => {
  const response = await axios.get(`${BASE_URL}/trees/${id}`);
  return response.data;
};

export const createTree = async (treeData: any) => {
  const response = await axios.post(`${BASE_URL}/trees`, treeData);
  return response.data;
};

export const updateTree = async (id: string, treeData: any) => {
  const response = await axios.put(`${BASE_URL}/trees/${id}`, treeData);
  return response.data;
};

export const deleteTree = async (id: string) => {
  const response = await axios.delete(`${BASE_URL}/trees/${id}`);
  return response.data;
};
