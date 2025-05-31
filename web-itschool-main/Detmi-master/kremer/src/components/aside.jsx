import React from "react";
import { Link } from "react-router-dom";
import styles from '../styles/python/python_introduce.module.css';
import Header from "./headers/headerPython";
import Footer from "./footer/footerPY";

export default function AsideIntro(props) {
    return (
        <aside className={styles['aside-right']} id="asidee">
            <Header />

            <div className={styles['button__wrapper']}>
                <Link to="/videocoursePY" className={styles['button__link']}>
                    <button 
                        className={styles['button__link-to-course']} 
                        type="button" 
                        id="button__course"
                    >
                        GO TO THE COURSE
                    </button>
                </Link>
            </div>
            
            <div className={styles['course-info']}>
                <div>
                    <h1 className={styles.title}>

                        Python Course

                    </h1>

                </div>
                <div className={styles['intro-block']}>
                    <p><strong>What to expect:</strong></p>
                    <p>This course is an introduction to the Python language, covering basic structures. Practical
                        assignments follow each topic.</p>
                </div>
                <div className={styles['for-whom-block']}>
                    <p><strong>Who is this course suitable for?</strong></p>
                    <p>This course is suitable for those who are completely new to this programming language but have a
                        great desire to learn it. This course will serve as your guide.</p>
                </div>
                <div className={styles['course-program']}>
                    <p><strong>Course Program:</strong></p>
                    <ul>
                        <li>General Information about the Course</li>
                        <li>Basic Data Types</li>
                        <li>How to take the course?</li>
                        <li>For teachers and group work</li>
                        <li>Introduction. Getting Started with Python</li>
                        <li>Print and Input Commands</li>
                        <li>Sep and End Parameters</li>
                        <li>Integer Arithmetic. Part 1</li>
                        <li>Integer Arithmetic. Part 2</li>
                        <li>For Loop</li>
                        <li>For Loop: range function</li>
                        <li>Common Scenarios</li>
                        <li>While Loop</li>
                        <li>While Loop: Processing Digits of a Number</li>
                        <li>break, continue, and else</li>
                        <li>Bug Finding and Code Review</li>
                    </ul>
                </div>
            </div>
            <Footer/>
        </aside>
    );
}
