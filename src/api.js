
import axios from 'axios';

const API_BASE_URL = 'http://localhost:8080';

const api = axios.create({
  baseURL: API_BASE_URL,
});

export const fetchChannelData = () => {
  return api.get('/products'); 
};

export const fetchTopFiveYearData = (inventoryId) => {
   return api.get(`${API_BASE_URL}/api/sales/top-five-year/${inventoryId}`);
}
export const fetchTopFiveProducts = (inventoryId) => {
    return api.get(`${API_BASE_URL}/api/sales/topFive/${inventoryId}`);
}

export const deleteProduct = (productId)  =>{
  return api.delete(`${API_BASE_URL}/api/products/delete-product/${productId}`)
}

export const fetchCostRevernewData = (inventoryId) => {
  return api.get(`${API_BASE_URL}/api/inventory/cost-Revenue/${inventoryId}`);
}

export const addNewTransaction = (transactionData) => {
  return axios.post(`${API_BASE_URL}/api/transactions/add-new-transaction`,transactionData);
}

export const fetchSearchNearestInventories = (inventoryId, search) => {
  return axios.get(`${API_BASE_URL}/api/inventory/by-productID/${inventoryId}/${search}`);
};

export const fetchTransactionData = (inventoryId) => {
  return axios.get(`${API_BASE_URL}/api/inventory/transactions/${inventoryId}`)
}

export const fetchProductDetails= (inventoryId) => {
  return axios.get(`${API_BASE_URL}/api/products/all/${inventoryId}`)
}

export const addNewProductApi = (productData) => {
  return axios.post(`${API_BASE_URL}/api/products/new`,productData);
}

export const updateProductAPI = (productId,productData) => {
  return axios.put(`${API_BASE_URL}/api/products/update/${productId}`,productData);
}

export const addNewInventory = (inventoryData) => {
  return axios.post(`${API_BASE_URL}/api/admin/new-inventory`,inventoryData);
}

export const inventoryDataAPI = (adminId) => {
  return axios.get(`${API_BASE_URL}/api/admin/inventory/${adminId}`);
}

export const fetchInventoryLogin = async (values) => {
  try {
      const response = await axios.post('http://localhost:8080/api/inventory/login', values);
      return response;
  } catch (error) {
      console.error('Error during API request:', error);
      throw error;  
  }
};

export const fetchAdminLogin = async (values) => {
  try {
      const response = await axios.post('http://localhost:8080/api/admin/login', values);
      return response;
  } catch (error) {
      console.error('Error during API request:', error);
      throw error;  
  }
};