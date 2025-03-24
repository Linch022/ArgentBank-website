import { useSelector } from 'react-redux'


function UserPage() {


  const user = useSelector((state) => state.auth.user);
  console.log(user);
  
  return (
    <div>{user?.userName}</div>
  )
}

export default UserPage