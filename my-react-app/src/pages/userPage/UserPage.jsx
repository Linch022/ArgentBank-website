import { useSelector } from 'react-redux'
import Button from '../../components/button/Button';
import { BUTTON_TYPES } from '../../helpers/buttonsTypes';
import AccountContent from '../../containers/AccountContent';

function UserPage() {
  const user = useSelector((state) => state.auth.user);
  const accountInfos = [
    {
      id: 1654163,
      type: "Argent Bank Checking (x8349)",
      amount: "$2,082.79",
      amountDesc: "Available Balance",
    },
    {
      id: 56465411,
      type: "Argent Bank Savings (x6712)",
      amount: "$10,928.42",
      amountDesc: "Available Balance",
    },
    {
      id: 6510544,
      type: "Argent Bank Credit Card (x8349)",
      amount: "$184.30",
      amountDesc: "Current Balance",
    },
  ];

  return (
    <main className='main bg-dark'>
      <div className='header'>
        <h1> Welcome back <br />{user?.firstName} {user?.lastName}!</h1>
        <Button type={BUTTON_TYPES.DEFAULT} className="edit-button" onClick={()=> null}>Edit Name</Button>
      </div>
      <h2 className='sr-only'>Accounts</h2>
        {accountInfos.map((i) => (
          <AccountContent accountData={i} key={i.id}/>
        ))}
    </main>
  )
}

export default UserPage