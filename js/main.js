async function request(url) {
  const response = await fetch(url)
  const json = await response.json()
  return json
}


const btnForm = document.getElementById('btnForm')
btnForm.addEventListener('click', (e) => {
  e.preventDefault()
  const inputEmail = document.getElementById('email').value
  const url = request(`https://acmebunkerapi.herokuapp.com/2factors/${inputEmail}`)
  console.log(url)
})


