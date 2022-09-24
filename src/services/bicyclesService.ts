import store from "@/store";
import Bicycle from "@/types/Bicycle";
import axios, { AxiosError } from "axios";
import { User } from 'firebase/auth'

const bicyclesUrl: string = process.env.VUE_APP_BICYCLES_API || 'http://localhost:3002';

async function getBicycles(): Promise<Bicycle[]> {
    let response;
    const url = `${bicyclesUrl}/bicycles`;
    const user: User = store.getters.user;
    const headers = {
        Authorization: "Bearer " + await user.getIdToken(true)
    };
    try {
        response = await axios.get(url, { headers });
    } catch (error: any | AxiosError) {
        console.log("file: bicyclesService.ts ~ line 13 ~ getBicycles ~ error", error)
        throw error;
    }
  
    return response.data;
}

async function createBicycle(bicycle: Bicycle) {
    let response;
    const url = `${bicyclesUrl}/bicycles`;
    const user: User = store.getters.user;
    const headers = {
        Authorization: "Bearer " + await user.getIdToken(true)
    };
    try {
        response = await axios.post(url, bicycle, { headers });
    } catch (error) {
        console.log("file: bicyclesService.ts ~ line 25 ~ createBicycle ~ error", error)
    }
    return response.data;
}

async function editBicycle(id: string, bicycle: Bicycle) {
    let response;
    const url = `${bicyclesUrl}/bicycles/${id}`;
    const user: User = store.getters.user;
    const headers = {
        Authorization: "Bearer " + await user.getIdToken(true)
    };
    try {
        response = await axios.put(url, bicycle, { headers });
    } catch (error) {
        console.log("file: bicyclesService.ts ~ line 36 ~ editBicycle ~ error", error)
    }
    return response.data;
}

async function deleteBicycle(id: string) {
    let response;
    const url = `${bicyclesUrl}/bicycles/${id}`;
    const user: User = store.getters.user;
    const headers = {
        Authorization: "Bearer " + await user.getIdToken(true)
    };
    try {
        response = await axios.delete(url, { headers });
    } catch (error) {
        console.log("file: bicyclesService.ts ~ line 47 ~ deleteBicycle ~ error", error)
    }
    return response.data;
}

export {getBicycles, createBicycle, editBicycle, deleteBicycle};
