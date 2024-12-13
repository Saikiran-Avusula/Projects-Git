

import axios from "axios"
import { useEffect, useState } from "react"


const SreachFUntionRandomData = () => {
  const [usersData, setUsersData] = useState([]) //all users 

  const [searchUsers, setSerachUsers] = useState('') // for sreaching purpose
  const [filteredUsers, setFilterUsers] = useState([]) // for filtering users 

  useEffect(() => {
    axios.get('https://dummyjson.com/users').then((res) => {
      setUsersData(res.data.users);
      setFilterUsers(res.data.users);
    })
      .catch((error) => {
        console.error("Error is:", error);
      });
  }, [])
  // console.log(usersData);

  // handling input data of serach inputs
  const inputHandler = (event) => {
    const inputData = event.target.value.toLowerCase() //converting to lower case 

    setSerachUsers(inputData) //updating to search sreach input 

    const filterred = usersData.filter((user) =>
      user.firstName.toLowerCase().includes(inputData) ||
      user.lastName.toLowerCase().includes(inputData)
    );

    setFilterUsers(filterred) //updated filterd users state

  }


  return (
    <>
      <h1>Displaying Listing of users</h1>

      {/* input for searching users */}
      <input type="text"
        className='form'
        placeholder='Search the User'
        value={searchUsers}  // controlled input values bound to state
        onChange={inputHandler}  // updated search query on input change
      />

      {/* renderring filitered users if avilable */}
      {filteredUsers.length > 0 ?
        (
          <div className='divFrame'>
            {filteredUsers.map((user) => (
              <div key={user.id} className="users">
                <h3>
                  Name: {user.firstName} {user.lastName}
                </h3>
                <p>Age: {user.age}</p>
                <p>Gender: {user.gender}</p>
                <p>Mail: {user.email}</p>
                <p>Phone: {user.phone}</p>
                <img src={user.image} alt={user.firstName} width={250} height={250} />
              </div>
            ))}
          </div>
        ) :
        (
          <h2>No User Details</h2>
        )
      }
    </>
  );
}

export default SreachFUntionRandomData
