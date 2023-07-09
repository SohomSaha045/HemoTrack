"use client";
import React from 'react'
import styles from './page.module.css'

const testFunc = () =>{
  console.log("Hello World!");
}

function page() {
  return (
    <div className={styles.main}>
      <div className={styles.heading}>
        Blood bank login
      </div>
      <div className={styles.form_div}>
        <div className={styles.input_field}>
          <input type="text" placeholder="username" />
        </div>
        <div className={styles.input_field}>
          <input type="password" placeholder="Password" />
        </div>

        <button className={styles.login_btn} onClick={()=>{testFunc()}}>Log in</button>
      </div>
    </div>
  )
}

export default page