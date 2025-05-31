// Sidebar.jsx

import React from 'react';
import { Link } from 'react-router-dom';
import styles from "../styles/sidebar.module.css";

function SidebarJs() {
    return (
        <div className={styles.sidebar}>
            <h3></h3>
            <ul>
                <li>
                    <Link to="/videocourseJS">Introduction to the Course</Link>
                </li>
                <li>
                    <Link to="/videocourseJS1">Variables and Data Types in JavaScript</Link>
                </li>
                <li>
                    <Link to="/course_textJS1">Variables and Data Types in JavaScript - Synopsis</Link>
                </li>
                <li>
                    <Link to="/1_1js">Task №1</Link>
                </li>
                <li>
                    <Link to="/1_2js">Task №2</Link>
                </li>
                <li>
                    <Link to="/1_3js">Task №3</Link>
                </li>
                <li>
                    <Link to="/videocourseJS2">Mathematical Operations</Link>
                </li>
                <li>
                    <Link to="/course_textJS2">Mathematical Operations - Synopsis</Link>
                </li>
                <li>
                    <Link to="/2_1js">Task №1</Link>
                </li>
                <li>
                    <Link to="/2_2js">Task №2</Link>
                </li>
                <li>
                    <Link to="/videocourseJS1">For and While Loops</Link>
                </li>
                <li>
                    <Link to="/course_textJS1">For and While Loops - Synopsis</Link>
                </li>
                <li>
                    <Link to="/1_1js">Task №1</Link>
                </li>
                <li>
                    <Link to="/1_2js">Task №2</Link>
                </li>
                <li>
                    <Link to="/1_3js">Task №3</Link>
                </li>
                <li>
                    <Link to="/videocourseJS1">Functions and their Usage</Link>
                </li>
                <li>
                    <Link to="/course_textJS1">Functions and their Usage - Synopsis</Link>
                </li>
                <li>
                    <Link to="/1_1js">Task №1</Link>
                </li>
                <li>
                    <Link to="/1_2js">Task №2</Link>
                </li>
                <li>
                    <Link to="/1_3js">Task №3</Link>
                </li>
                <li>
                    <Link to="/videocourseJS1">Objects and Arrays</Link>
                </li>
                <li>
                    <Link to="/course_textJS1">Objects and Arrays - Synopsis</Link>
                </li>
                <li>
                    <Link to="/1_1js">Task №1</Link>
                </li>
                <li>
                    <Link to="/1_2js">Task №2</Link>
                </li>
                <li>
                    <Link to="/1_3js">Task №3</Link>
                </li>
            </ul>
        </div>
    );
}

export default SidebarJs;
