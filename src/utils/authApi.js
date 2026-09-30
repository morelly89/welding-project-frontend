const API_URL = import.meta.env.VITE_API_URL;

export const signup = async (userData) => {
  const response = await fetch(`${API_URL}/api/auth/signup`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userData),
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Signup failed");
  }

  return data;
};

export const login = async (userData) => {
  const response = await fetch(`${API_URL}/api/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userData),
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Login failed");
  }

  return data;
};

export const getCurrentUser = async (token) => {
  const response = await fetch(`${API_URL}/api/auth/me`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Unable to get current user");
  }

  return data;
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

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Unable to update profile");
  }

  return data;
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

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Unable to update profile image");
  }

  return data;
};
