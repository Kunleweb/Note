import axios from 'axios'

export const login = async (email, password)=>{
    const res = await axios({
        method: 'POST',
        url: 'api/users/login',
        data: {email, password}
    })
}