import axios from "axios";
import { BASE_URL } from "../../utils/url";
import { getUserFromStorage } from "../../utils/getUserFromStorage";

//! Get the token
// console.log('token:', token);
//! Add
export const addTransactionAPI = async ({
  type,
  category,
  date,
  description,
  amount,
}) => {
  const token = getUserFromStorage();

  const response = await axios.post(
    `${BASE_URL}/transactions/create`,
    {
      category,
      date,
      description,
      amount,
      type,
    },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  //Return a promise
  return response.data;
};

//! Update Transaction
export const updateTransactionAPI = async ({
  id,
  type,
  category,
  date,
  description,
  amount,
}) => {
  const token = getUserFromStorage();

  const response = await axios.put(
    `${BASE_URL}/transactions/update/${id}`,
    {
      category,
      date,
      description,
      amount,
      type,
    },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  //Return a promise
  return response.data;
};
//delete transcation
export const deleteTransactionAPI = async (id) => {
  const token = getUserFromStorage();

  const response = await axios.delete(`${BASE_URL}/transactions/delete/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};

//! update category
export const updateCategoryAPI = async ({ name, type, id }) => {
  const token = getUserFromStorage();

  const response = await axios.put(
    `${BASE_URL}/categories/update/${id}`,
    {
      name,
      type,
    },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  //Return a promise
  return response.data;
};

//! delete category
export const deleteCategoryAPI = async (id) => {
  const token = getUserFromStorage();

  const response = await axios.delete(`${BASE_URL}/categories/delete/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  //Return a promise
  return response.data;
};

//! lists transactions
export const listTransactionsAPI = async ({
  category,
  type,
  startDate,
  endDate,
}) => {
  const token = getUserFromStorage();
  console.log('token:', token);
  const response = await axios.get(`${BASE_URL}/transactions/lists`, {
    params: { category, endDate, startDate, type },
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  //Return a promise
  return response.data;
};