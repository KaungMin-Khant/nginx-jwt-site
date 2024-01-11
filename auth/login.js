async function onSubmit(event) {
  event.preventDefault();
  // const response = await fetch('http://127.0.0.1:80/login', {
  //   method: 'POST',
  // })
  // const data = await response.json();
  // if (data.token) {
    // localStorage.setItem('token', JSON.stringify({
    //   token: data.token
    // }))
    window.location.href = "/products"
  // }
}