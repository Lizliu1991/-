import axios from "axios";
import { propVar } from "../db";



export const baseUrl = 'https://bayut.p.rapidapi.com'




export const fetchApi = async (url) => {
// const { data } = await axios.get((url), {
//     headers: {
//         'X-RapidAPI-Key': '0fdf5d5f62mshe82f5f4a528bb4ap1ea7bejsn930ceca804b9',
//         'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
//       }  
// })
const data = propVar;
return data
}