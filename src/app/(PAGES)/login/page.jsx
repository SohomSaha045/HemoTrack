"use client";
import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import styles from './page.module.css'

const testFunc = () => {
  console.log("Hello World!");
}

function page() {
  return (
    <div className={styles.main}>
      <div className={styles.left_div}>
        <Image src="/img_login.png" alt="Login image" width={500} height={500} priority/>
      </div>
      <div className={styles.right_div}>
        <div className={styles.heading}>Welcome Back!</div>
        <div className={styles.subheading}>Please enter your details to login</div>
        <div className="form_div">
          <div className={styles.form_field}>
            <input type="text" placeholder="Username" />
          </div>
          <div className={styles.form_field}>
            <input type="password" placeholder="Password" />
          </div>
        </div>
        <div className={styles.login_btn}>
          <button>Log in</button>
        </div>
        <div className={styles.nav_like}>
          <p>Don't have an account?</p>
          <Link href="/register">Register here now</Link>
        </div>
      </div>
    </div>
  )
}

export default page