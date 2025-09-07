const hideAlert = () => {
  const el = document.querySelector('.alert');
  if (el) el.remove();
};

const showAlert = (type, message) => {
  hideAlert(); // remove any existing alert

  // create alert div
  const alertDiv = document.createElement('div');
  alertDiv.className = 'alert';
  alertDiv.textContent = message;
  alertDiv.title = 'notification';

  // apply styles directly
  Object.assign(alertDiv.style, {
    position: 'fixed',
    top: '20px',
    left: '50%',
    transform: 'translateX(-50%)', // center horizontally
    minWidth: '200px',            // wider for readability
    padding: '15px 25px',
    fontSize: '16px',
    fontWeight: 'bold',
    color: '#fff',
    borderRadius: '10px',
    textAlign: 'center',
    zIndex: '1000',
    backgroundColor: type === 'success' ? '#28a745' : '#dc3545',
    boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
  });

  // add to DOM
  document.body.appendChild(alertDiv);

  // auto-hide after 5 seconds
  setTimeout(hideAlert, 5000);
};


const save = async(title, note)=>{
    
        const res = await axios({
            method: 'POST',
            url: '/api/notes/addnote',
            data: {
                title, note
            }})
    if(res.data.status === 'success'){
        showAlert('New Note Saved', 'Saved to db successfully')
    }}


document.getElementById('saveNote').addEventListener('click', (e)=>{
    e.preventDefault();
    console.log('pinged!')
    const title = document.getElementById('place').value
    const note = document.getElementById('place').value
    save(title, note)

})


