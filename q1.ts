import axios from 'axios';


const getUser = async (userId: number): Promise<string> => {
    const url = `https://jsonplaceholder.typicode.com/users/${userId}`;
    
    try {
        const response = await axios.get(url);
        return `${response.data.name}`;
    } catch (error) {
        return "INVALID USER ID";
    }
};

const input1 = 1;
const input2 = 100;


getUser(input1).then((result) => console.log(result)); 
getUser(input2).then((result) => console.log(result)); 


export default getUser;
//ณพพงศ์ อนรรฆพฤฒ 660610750
