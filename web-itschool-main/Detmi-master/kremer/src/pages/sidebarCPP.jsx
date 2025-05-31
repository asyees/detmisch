// Sidebar.jsx

import React from 'react';
import { Link } from 'react-router-dom';
import styles from "../styles/sidebar.module.css";

function SidebarCPP() {
    return (
        <div className={styles.sidebar}>
            <h3></h3>
            <ul>
                <li>
                    <Link to="/videocourseCPP">Introduction to the Course</Link>
    </li>
    <li>
        <Link to="/videocourseCPP1">Variables and Data Types in C++</Link>
    </li>
    <li>
        <Link to="/course_textC">Variables and Data Types in C++ - Summary</Link>
    </li>
    <li>
        <Link to="/1_1cpp">Task №1</Link>
    </li>
    <li>
        <Link to="/1_2cpp">Task №2</Link>
    </li>
    <li>
        <Link to="/videocourseCPP2">Conditional Constructs in C++</Link>
    </li>
    <li>
        <Link to="/course_textC1">COMPLEX CONSTRUCTS. IF-ELSE, SWITCH-CASE OPERATORS - Summary</Link>
    </li>
    <li>
        <Link to="/2_1cpp">Task №1</Link>
    </li>
    <li>
        <Link to="/2_2cpp">Task №2</Link>
    </li>
    <li>
        <Link to="/videocourseCPP2">For and while loops</Link>
    </li>
    <li>
        <Link to="/course_textC1">For and while loops - Summary</Link>
    </li>
    <li>
        <Link to="/2_1cpp">Task №1</Link>
    </li>
    <li>
        <Link to="/2_2cpp">Task №2</Link>
    </li>
    <li>
        <Link to="/videocourseCPP2">Pointers and References</Link>
    </li>
    <li>
        <Link to="/course_textC1">Pointers and References - Summary</Link>
    </li>
    <li>
        <Link to="/2_1cpp">Task №1</Link>
    </li>
    <li>
        <Link to="/2_2cpp">Task №2</Link>
    </li>
    <li>
        <Link to="/videocourseCPP2">Classes and Objects</Link>
    </li>
    <li>
        <Link to="/course_textC1">Classes and Objects - Summary</Link>
    </li>
    <li>
        <Link to="/2_1cpp">Task №1</Link>
    </li>
    <li>
        <Link to="/2_2cpp">Task №2</Link>
    </li>
</ul>
        </div>
    );
}

export default SidebarCPP;
