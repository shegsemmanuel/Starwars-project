import axios from "axios";

export const Request = axios.create({
    baseURL: 'https://swapi.dev/api/', headers: {'Content-Type': 'application/json'}
});
