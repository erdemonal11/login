import axios from "axios";

export const getToken = async (email, password, state) => {
  try {
    const response = await axios.post("https://reqres.in/api/login", {
      email: email,
      password: password,
    });
    console.log(response.data);
    localStorage.setItem("token", JSON.stringify(response.data));
    return response.data;
  } catch (error) {
    console.log(error);
    state.error = "Login failed. Not recognized by API!";
    throw error;
  }
};
