const hideAlert = ()=>{
    const el = document.querySelector('.alert');
    if (el) el.parentElement.removeChild(el)
}
const showAlert = (type, message)=>{
    hideAlert()
    const markup = `<div id= "alert" title = "notification" ${type} >${message}</div>`
    document.querySelector('body').insertAdjacentElement('afterbegin', markup)
    window.setTimeout(hideAlert, 5000)
}


const save = async(title, note)=>{
    try{
        const res = await axios({
            method: 'POST',
            url: '/api/notes/addnote',
            data: {
                title, note
            }})
    if(res.data.status === 'success'){
        showAlert('New Note Saved')
    } 
    }catch(err){showAlert('Error Saving to Database')}
}


document.getElementById('saveNote').addEventListener('click', (e)=>{
    e.preventDefault();
    const title = document.getElementById('place').value
    const note = document.getElementById('place').value
    save(title, note)

})