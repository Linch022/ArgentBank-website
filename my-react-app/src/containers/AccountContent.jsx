import React from 'react'
import Button from '../components/button/Button'
import { BUTTON_TYPES } from '../helpers/buttonsTypes'

function AccountContent({ accountData }) {
  return (
    <section className='account'>
        <div className="account-content-wrapper">
        <h3 className="account-title">{accountData.type}</h3>
        <p className="account-amount">{accountData.amount}</p>
        <p className="account-amount-description">{accountData.amountDesc}</p>
        </div>
        <div className="account-content-wrapper cta">
            <Button type={BUTTON_TYPES.DEFAULT} className="transaction-button" onClick={() => null}>View Transacions</Button>
        </div>
    </section>
  )
}

export default AccountContent