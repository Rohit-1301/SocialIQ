

// import axios from 'axios';

// const BASE_API_URL = "/api"; // Use the proxy path
// const LANGFLOW_ID = "a98fd801-76d1-41ed-8e76-52c93479eef3";
// const FLOW_ID = "3986bd05-f7d3-43d4-aadb-322e1ee7fb50";
// const APPLICATION_TOKEN = 'AstraCS:QUruREhCptCezfhalHQcgutK:ebfbdd63250bd1452177ddbdc0b13169a4f5d95094a5979142cf6de02184f218';
// const ENDPOINT = "admin";

// export const runFlow = async (message) => {
//   const api_url = `${BASE_API_URL}/lf/${LANGFLOW_ID}/api/v1/run/${ENDPOINT}`;
//   const payload = {
//     input_value: message,
//     output_type: "chat",
//     input_type: "chat",
//   };
//   const headers = {
//     Authorization: `Bearer ${APPLICATION_TOKEN}`,
//     "Content-Type": "application/json",
//   };

//   try {
//     const response = await axios.post(api_url, payload, { headers });
//     return response.data;
//   } catch (error) {
//     console.error("Error running flow:", error);
//     throw error;
//   }
// };

// import axios from 'axios';


// // Load environment variables from the .env file
// const BASE_API_URL = String(import.meta.env.VITE_API_URL); // Using Vite's way of loading env vars
// const LANGFLOW_ID = String(import.meta.env.VITE_LANGFLOW_ID);
// const FLOW_ID = String(import.meta.env.VITE_FLOW_ID);
// const APPLICATION_TOKEN = String(import.meta.env.VITE_APPLICATION_TOKEN);
// const ENDPOINT = "admin";

// console.log('BASE_API_URL:', BASE_API_URL);
// console.log('LANGFLOW_ID:', LANGFLOW_ID);
// console.log('FLOW_ID:', FLOW_ID);
// console.log('APPLICATION_TOKEN:', APPLICATION_TOKEN);


// export const runFlow = async (message) => {
//   const api_url = `${BASE_API_URL}/lf/${LANGFLOW_ID}/api/v1/run/${ENDPOINT}`;
//   console.log('API URL:', api_url);
  
//   const payload = {
//     input_value: message,
//     output_type: "chat",
//     input_type: "chat",
//   };

//   const headers = {
//     Authorization: `Bearer ${APPLICATION_TOKEN}`,
//     "Content-Type": "application/json",
//   };

//   try {
//     const response = await axios.post(api_url, payload, { headers });
//     console.log('API Response:', response.data);
//     return response.data;
//   } catch (error) {
//     console.error('Error Details:', {
//       message: error.message,
//       config: error.config,
//       code: error.code,
//       response: error.response,
//     });
//     throw error;
//   }
// };


// import axios from 'axios';

// // Load environment variables from the .env file
// const BASE_API_URL = import.meta.env.VITE_API_URL; // Using Vite's way of loading env vars
// const LANGFLOW_ID = import.meta.env.VITE_LANGFLOW_ID;
// const FLOW_ID = import.meta.env.VITE_FLOW_ID;
// const APPLICATION_TOKEN = import.meta.env.VITE_APPLICATION_TOKEN;
// const ENDPOINT = "admin";

// console.log('BASE_API_URL:', BASE_API_URL);
// console.log('LANGFLOW_ID:', LANGFLOW_ID);
// console.log('FLOW_ID:', FLOW_ID);
// console.log('APPLICATION_TOKEN:', APPLICATION_TOKEN);

// export const runFlow = async (message) => {
//   const api_url = `${BASE_API_URL}/lf/${LANGFLOW_ID}/api/v1/run/${ENDPOINT}`;
//   console.log('API URL:', api_url);
  
//   const payload = {
//     input_value: message,
//     output_type: "chat",
//     input_type: "chat",
//   };

//   const headers = {
//     Authorization: `Bearer ${APPLICATION_TOKEN}`,
//     "Content-Type": "application/json",
//   };

//   try {
//     const response = await axios.post(api_url, payload, { headers });
//     return response.data;
//   } catch (error) {
//     console.error("Error running flow:", error);
//     throw error;
//   }
// };

import axios from 'axios';

// Load environment variables from the .env file
const BASE_API_URL = '/api'; // Use the proxy path
const LANGFLOW_ID = import.meta.env.VITE_LANGFLOW_ID;
const FLOW_ID = import.meta.env.VITE_FLOW_ID;
const APPLICATION_TOKEN = import.meta.env.VITE_APPLICATION_TOKEN;
const ENDPOINT = "admin";

console.log('BASE_API_URL:', BASE_API_URL);
console.log('LANGFLOW_ID:', LANGFLOW_ID);
console.log('FLOW_ID:', FLOW_ID);
console.log('APPLICATION_TOKEN:', APPLICATION_TOKEN);

export const runFlow = async (message) => {
  const api_url = `${BASE_API_URL}/lf/${LANGFLOW_ID}/api/v1/run/${ENDPOINT}`;
  console.log('API URL:', api_url);
  
  const payload = {
    input_value: message,
    output_type: "chat",
    input_type: "chat",
  };

  const headers = {
    Authorization: `Bearer ${APPLICATION_TOKEN}`,
    "Content-Type": "application/json",
  };

  try {
    const response = await axios.post(api_url, payload, { headers });
    return response.data;
  } catch (error) {
    console.error("Error running flow:", error);
    throw error;
  }
};