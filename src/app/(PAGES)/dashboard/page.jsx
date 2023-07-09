"use client";
import React, { useState } from 'react'

import styles from "./page.module.css";

const CheckAvailability = () => {
    return (
        <table className={styles.table}>
            <tbody >
            <tr>  
                <th >Blood Group</th>
                <th>Qty. in litres</th>
            </tr>
            <tr>
                <td>A+</td>
                <td>0</td>
            </tr>
            <tr>
                <td>A-</td>
                <td>0</td>
            </tr>
            <tr>
                <td>B+</td>
                <td>0</td>
            </tr>
            <tr>
                <td>B-</td>
                <td>0</td>
            </tr>
            <tr>
                <td>AB+</td>
                <td>0</td>
            </tr>
            <tr>
                <td>AB-</td>
                <td>0</td>
            </tr>
            <tr>
                <td>O+</td>
                <td>0</td>
            </tr>
            <tr>
                <td>O-</td>
                <td>0</td>
            </tr>
            </tbody>
        </table>
    )
}

const RequestPending = () => {
    return (
        <h1> hello </h1>
    )
}

const TransactionRecord = () => {
   return(
    <h2>Hello</h2>
   )

}

function page() {
    const [option, setOption] = useState('0');

    return (
        <div className={styles.main}>
            <div className={styles.left_nav}>
                <div className={styles.blood_bank_name}>
                    HemoTrack
                </div>
                <div className={styles.navigation_list}>
                    <div className={`${styles.nav_option} ${option == 0 ? styles.nav_option_selected : ''}`} onClick={() => { setOption(0) }}>
                        <li>Blood availability</li>
                    </div>
                    <div className={`${styles.nav_option} ${option == 1 ? styles.nav_option_selected : ''}`} onClick={() => { setOption(1) }}>
                        <li>Pending Blood Request    </li>
                    </div>
                    <div className={`${styles.nav_option} ${option == 2 ? styles.nav_option_selected : ''}`} onClick={() => { setOption(2) }}>
                        <li>Request for blood</li>
                    </div>
                </div>
                <div className={styles.req_btn}>
                    <button type="submit">Request for blood</button>
                </div>
            </div>
            <div className={styles.right_display}>
                {
                    option == 0 ? CheckAvailability()
                        : option == 1 ? RequestPending()
                            : option == 2 ? TransactionRecord() : null
                }
            </div>
        </div>
    )
}

export default page