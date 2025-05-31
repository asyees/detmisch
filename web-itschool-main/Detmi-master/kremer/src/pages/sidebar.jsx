// Sidebar.jsx

import React from 'react';
import { Link } from 'react-router-dom';
import styles from "../styles/sidebar.module.css";

function Sidebar() {
    return (
        <div className={styles.sidebar}>
            <h3></h3>
            <ul>
                <li>
                    <Link to="/videocoursePY">Introduction to the Course</Link>
                </li>
                <li>
                    <Link to="/videocoursePY1">Basic Operations in Python</Link>
                </li>
                <li>
                    <Link to="/course_textPY">NUMBERS AND OPERATIONS ON THEM</Link>
                </li>
                <li>
                    <Link to="/1_1py">Task №1</Link>
                </li>
                <li>
                    <Link to="/1_2py">Task №2</Link>
                </li>
                <li>
                    <Link to="/1_3py">Task №3</Link>
                </li>
                <li>
                    <Link to="/videocoursePY2">Variables and Data Types</Link>
                </li>
                <li>
                    <Link to="/course_textPY1">PYTHON VARIABLES AND DATA TYPES</Link>
                </li>
                <li>
                    <Link to="/2_1py">Task №1</Link>
                </li>
                <li>
                    <Link to="/2_2py">Task №2</Link>
                </li>
                <li>
                    <Link to="/2_3py">Task №3</Link>
                </li>
                <li>
                    <Link to="/2_3py">Sep and End Parameters</Link>
                </li>
                <li>
                    <Link to="/2_1py">Task №1</Link>
                </li>
                <li>
                    <Link to="/2_2py">Task №2</Link>
                </li>
                <li>
                    <Link to="/2_3py">Task №3</Link>
                </li>
                <li>
                    <Link to="/2_3py">For Loop</Link>
                </li>
                <li>
                    <Link to="/2_1py">Task №1</Link>
                </li>
                <li>
                    <Link to="/2_2py">Task №2</Link>
                </li>
                <li>
                    <Link to="/2_3py">Task №3</Link>
                </li>
                <li>
                    <Link to="/2_3py">While Loop</Link>
                </li>
                <li>
                    <Link to="/2_1py">Task №1</Link>
                </li>
                <li>
                    <Link to="/2_2py">Task №2</Link>
                </li>
                <li>
                    <Link to="/2_3py">Task №3</Link>
                </li>
                <li>
                    <Link to="/2_3py">Break, continue and else</Link>
                </li>
                <li>
                    <Link to="/2_1py">Task №1</Link>
                </li>
                <li>
                    <Link to="/2_2py">Task №2</Link>
                </li>
                <li>
                    <Link to="/2_3py">Task №3</Link>
                </li>
            </ul>
        </div>
    );
}

export default Sidebar;
