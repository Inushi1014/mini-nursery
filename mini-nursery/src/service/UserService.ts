import axios from "axios";

export interface User {
    id: number;
    name: string;
    email?: string;
    phone?: string;
    company?: {
        name: string;
    };
    address?: {
        street: string;
        city: string;
    };
}

const BASE_URL = "https://jsonplaceholder.typicode.com/users";

export async function getUsers(): Promise<User[]> {
    const res = await axios.get(BASE_URL);
    return res.data;
}

export async function getUser(id: number): Promise<User> {
    const res = await axios.get(`${BASE_URL}/${id}`);
    return res.data;
}
