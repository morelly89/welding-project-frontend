import { checkResponse } from "./checkResponse";
const API_URL = "";

export const signup = async (userData) => {
  const response = await fetch(`${API_URL}/api/auth/signup`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userData),
  });

  return checkResponse(response);
};

export const login = async (userData) => {
  const response = await fetch(`${API_URL}/api/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userData),
  });

  return checkResponse(response);
};

export const getCurrentUser = async (token) => {
  const response = await fetch(`${API_URL}/api/auth/me`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return checkResponse(response);
};

export const updateCurrentUser = async (token, userData) => {
  const response = await fetch(`${API_URL}/api/auth/me`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(userData),
  });

  return checkResponse(response);
};

export const updateProfileImage = async (token, file) => {
  const formData = new FormData();

  formData.append("profileImage", file);

  const response = await fetch(`${API_URL}/api/auth/me/photo`, {
    method: "PATCH",
    headers: {
      Authorization: `Bearer ${token}`,
    },
    body: formData,
  });

  return checkResponse(response);
};
