import Bicycle from "@/types/Bicycle";
import axios from "axios";

const bicyclesUrl: string = process.env.VUE_APP_BICYCLES_API || 'http://localhost:3002';

async function getBicycles() {
    const url = `${bicyclesUrl}/bicycles`;
    const response = await axios.get(url);
    return response.data;
}

async function createBicycle(bicycle: Bicycle) {
    const url = `${bicyclesUrl}/bicycles`;
    const response = await axios.post(url, bicycle);
    return response.data;
}

export {getBicycles, createBicycle};
