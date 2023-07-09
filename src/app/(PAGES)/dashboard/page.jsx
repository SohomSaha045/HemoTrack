"use client";
import React, { useState } from 'react'

import styles from "./page.module.css";

const CheckAvailability = () => {
    return (
        <table>
            <tbody >
            <tr className= {styles.stocks} >
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
    return "Pending";
}

const TransactionRecord = () => {
    return "Record";
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
                        <li>Request Pending</li>
                    </div>
                    <div className={`${styles.nav_option} ${option == 2 ? styles.nav_option_selected : ''}`} onClick={() => { setOption(2) }}>
                        <li>Transaction Records</li>
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