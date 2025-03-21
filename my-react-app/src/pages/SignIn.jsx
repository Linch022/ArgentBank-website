import React from 'react'
import Form from '../containers/Form'

function SignIn() {
  return (
    <main className='main bg-dark'>
      <section className="sign-in-content">
      <i className="fa fa-user-circle sign-in-icon"></i>
      <h2>Sign In</h2>
      <Form />
      </section>
    </main>
  )
}

export default SignIn