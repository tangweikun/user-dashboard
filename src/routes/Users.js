import React from 'react';
import UsersComponent from '../components/Users/Users'
import styles from './Users.css'
import MainLayout from '../components/MainLayout/MainLayout'

function Users({ location }) {
  return (
    <MainLayout location={location}>
      <div className={styles.normal}>
        <UsersComponent />
      </div>
    </MainLayout>
  )
}

export default Users
