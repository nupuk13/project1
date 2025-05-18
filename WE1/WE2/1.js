const fetchData = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const users = await response.json();

    console.log(users);
    return users
};

fetchData().then(data =>{
    const container = document.getElementById('conatiner')

    data.forEach(obj =>{
        const username = document.createElement('h3')
        const city = document.createElement('p')
        const email= document.createElement('p')
        const list = document.createElement('li')

        username.innerText = obj.username
        city.innerText = obj.address.city
        email.innerText = obj.email
        list.appendChild(username)
        list.appendChild(city)
        list.appendChild(email)

        container.appendChild(list)



    }).catch(err => console.log(err))
})
