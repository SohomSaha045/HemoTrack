import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import styles from './page.module.css'

function page() {

  return (
      <div className={styles.main}>
        <div className={styles.col1}>
          <div>
            <Image src="/img1.avif" alt="Hello" priority width={500} height={500} />
          </div>
        </div>
        <div className={styles.col2}>
          <div className={styles.top_div}>
            <div className={styles.heading}>Register</div>
            <div className={styles.sub_heading}>Become an authorized Blood bank</div>
            <div className={styles.form_div}>
              <input type="text" className={styles.inp} placeholder='Enter your organization name' />
              <input type="text" className={styles.inp} placeholder='Contact number' />
              <input type="text" className={styles.inp} placeholder='Email address' />

              <div className={styles.password_div}>
                <input type="password" className={styles.inp} placeholder='Password' />
                <input type="password" className={styles.inp} placeholder='Confirm password' />
              </div>

              <div className={styles.bloodgroup1}>
                <input type="text" className={styles.inp} placeholder="A+" />
                <input type="text" className={styles.inp} placeholder="B+" />
                <input type="text" className={styles.inp} placeholder="AB+" />
                <input type="text" className={styles.inp} placeholder="O+" />
              </div>
              <div className={styles.bloodgroup1}>
                <input type="text" className={styles.inp} placeholder="A-" />
                <input type="text" className={styles.inp} placeholder="B-" />
                <input type="text" className={styles.inp} placeholder="AB-" />
                <input type="text" className={styles.inp} placeholder="O-" />
                </div>
            </div>

            <div className={styles.register}>
              <button type="submit">Register</button>
            </div>
          </div>

          <div className={styles.bottom_div}>
            <Link href="/login">Already have an account? Log in</Link>
          </div>


        </div>

      </div>
  )
}

export default page