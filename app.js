const fetchData = async (url) => {
  try {
    let res = await fetch(url)
    let data = await res.json();
    return data;
  } catch (error) {
    console.log(error)
  }
}

fetchData('https://jsonplaceholder.typicode.com/users').then((data) => {
  let users = data;

  // deleted user id  
  users.forEach(user => {
    delete user.id
  });

  // log name who works at 'Robel-Corkery' company
  let searchedUser = users.find((user) => user.company.name === 'Robel-Corkery');
  console.log(searchedUser.name);

  // sorts users by user name
  users.sort((a, b) => {
    return a.username.localeCompare(b.username);
  });


  // log users whose lat is greater than 0
  let nearbyUsers = users.filter((user) => user.address.geo.lat > 0);
  console.log(nearbyUsers);

  // added an image property 
  users.map((user) => {
    return {
      ...user,
       image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/2048px-Unofficial_JavaScript_logo_2.svg.png'
    }
  });


  // Delete a user with the username ‘Elwyn.Skiles’
  users.filter((user) => user.username !== 'Elwyn.Skiles');

});

