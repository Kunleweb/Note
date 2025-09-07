const pageload =  async() =>{
    try{const res = await axios({
        method: 'GET',
        url: '/api/notes/'
    })
   if (res.data.status === 'success') {
      window.location.href = 'http://127.0.0.1:3000/api/notes/'; // change to your page
    }}catch(err){res.status(401).json({status: 'error', message: err.message})}
}

// const pageload = async () => {
//     try {
//         const res = await axios.get('/api/notes/');
//         console.log(res.data); // <-- log the data in the console
//         if (res.data.status === 'login successful') {
//             window.location.href = 'http://127.0.0.1:3000/api/notes/'; // go see raw JSON
//         }
//     } catch (err) {
//         console.error('Error fetching notes:', err);
//     }
// };



document.getElementById('allNotes').addEventListener('click', (e)=>{
   pageload()
})


