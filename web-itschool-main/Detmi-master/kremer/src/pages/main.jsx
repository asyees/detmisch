//import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "../components/headers/header";
//import HeaderJs from "../components/headers/headerJS";
//import HeaderPY from "../components/headers/headerPython";
//import HeaderCPP from "../components/headers/headerCPP";
import Footer from "../components/footer/footer";
import styles from "../styles/style_for_main.module.css"
import Programmer_img from "../images/programmer.png"
import Languages_img from "../images/languages.png"
import top2_img from "../images/4.png"
import Languages_img2 from "../images/7.png"
import Some_img3 from "../images/3.png"
import Some_img2 from "../images/2.png"
import Some_img1 from "../images/1.png"
import Some_img4 from "../images/8.png"
import React from 'react';
import { NavLink } from 'react-router-dom';

function MainPage() {
    return (
    <div>
        <Header/>
        <div className={styles.background}>
        <div className={styles["width-wrapper"]}> 
        <main className={styles.main}>
         <section className={styles.top}>
            <div className={styles.container1}>
                <div className={styles["top__wrapper"]}>
                <div className={styles["zaeb"]}>
                    <div className={styles["section_1_item-1"]}>
                        <h1 className={styles["section_1_text-1"]}>
                            JOIN US AND DISCOVER NEW HORIZONS OF OPPORTUNITIES
                            WHERE ONLY YOUR IMAGINATION SETS THE LIMITS
                        </h1>
                    </div>

                    <div className={styles["section_1_item-2-wrapper"]}>
                        <img src={Languages_img} alt="" className={styles["languages_img"]}/>
                        <div className={styles["section_1_item-2"]}>
                            <h2 className={styles["section_1_text-2"]}>
                                Here you will find everything you need to become a professional in the world of
                                technology.
                                We offer training from scratch for beginners and an in-depth program for those
                                who already have programming experience.
                            </h2>
                        </div>
                    </div>
                    <div className={styles["section_1_item-3"]}>

                        <NavLink to="/courses" className={styles["section_1_item-3_link"]} href="#"> Learn
                            more</NavLink>

                    </div>
                </div>

                    <div className={styles["top__img-wrapper"]}>
                        <img src={Programmer_img} alt="" className={styles["top__img"]}/>
                    </div>
                </div>
            </div>
         </section>
            <section className={styles.top2}>
                <div className={styles.container}>
                    <div className={styles["top2__wrapper"]}>
                        <div className={styles["section_2_item-1"]}>
                            <div className={styles["section_2_item_1_img"]}>
                                <h3 className={styles["section_2_item_1"]}>
                                    OUR COURSES
                                </h3>
                                <img src={top2_img} alt="" className={styles["top1__img"]}/>
                            </div>
                        </div>
                        <div className={styles["help"]}>
                            <div className={styles["box1"]}>
                                <div className={styles["text"]}>PYTHON</div>
                            </div>
                            <div className={styles["box2"]}>
                                <div className={styles["text"]}>JavaScript</div>
                            </div>
                            <div className={styles["box3"]}>
                                <div className={styles["text"]}>C++</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className={styles.top3}>
                <div className={styles.container3}>
                    <div className={styles["top3__wrapper"]}>
                        <div className={styles["kek"]}>
                            <div className={styles["section_3_item-1-wrapper"]}>
                                <div className={styles["section_3_item-1"]}>
                                    <h4 className={styles["section_3_item_1"]}>
                                        WHAT AWAITS YOU?
                                    </h4>
                                    <img src={Languages_img2} alt="" className={styles["top7__img"]}/>
                                </div>
                            </div>
                        </div>
                        <div className={styles.container3}>
                            <div className={styles["top2__img-wrapper"]}>
                            </div>
                            <div className={styles["box4"]}>
                                <div className={styles["text"]}>Most interesting courses on programming languages to
                                    choose from, currently available languages include:
                                    Python, C++ and JavaScript. The courses consist of sections, each section has a
                                    video for familiarization with key aspects and concepts, as well as a short
                                    summary for reviewing the material. At the end of each section,
                                    practical and theoretical assignments are expected to reinforce acquired knowledge.
                                </div>
                            </div>
                      <div className={styles.container4}>
                        <img src={Some_img1} alt="" className={styles["top4__img"]}/>
                        <img src={Some_img2} alt="" className={styles["top5__img"]}/>
                        <img src={Some_img3} alt="" className={styles["top6__img"]}/>
                    </div>
                    </div>
                    </div>
                    </div>
                    
         </section>
               <section className={styles.top4}>
                <div className={styles.container5}>
                    <div className={styles["top4__wrapper"]}>
                        <div className={styles["lol"]}>
                            <div className={styles["section_4_item-1"]}>
                                <h5 className={styles["section_4_item_1"]}>
                                    ЗАДАЧИ
                                </h5>
                            </div>
                            <div className={styles.container6}>
                                <img src={Some_img4} alt="" className={styles["top8__img"]}/>
                           
                            <div className={styles["box5"]}>
                                <div className={styles["text"]}>
                                    <p className={styles["box5_par"]}>"Tasks" Section - Your Path to Success!</p>
                                    <h2 className={styles["box5_text"]}>The "Tasks" section will have two categories:
                                        "regular" and "competitive".
                                        Three difficulty levels await you - easy, medium, and hard!
                                        Here you can improve your skills by solving many interesting and diverse
                                        problems,
                                        and also gain a rating, thereby becoming the best in the leaderboard, taking
                                        first place!</h2>
                                </div>
                            </div>
                        </div>    
                        </div>    
                    </div>
                </div>
               </section>
               <section className={styles.top5}>
                <div className={styles.container7}>
                    <div className={styles["top5__wrapper"]}>
                        <div className={styles["pyk"]}>
                            <div className={styles["section_5_item-1"]}>
                                <h5 className={styles["section_5_item_1"]}>
                                    LEADERS OF THE COURSE
        </h5>
    </div>
</div>
<div className={styles.container7}>
    <div className={styles["firstboth"]}>
        <div className={styles["box6"]}>
            <div className={styles["text"]}>Only those who have gained the most rating points
                get into the course leaderboard.</div>
                </div>
        <div className={styles["box7"]}>
            <div className={styles["text"]}>Tasks can be very diverse
                - from simple to complex</div>
        </div>
    </div>

    <div className={styles["secondboth"]}>
        <div className={styles["box8"]}>
            <div className={styles["text"]}>Every course participant has a chance to take first place in this table.
                This is an incentive for everyone,
                because winning the leaderboard means recognition of their skill and knowledge.</div>
        </div>
        <div className={styles["box9"]}>
            <div className={styles["text"]}>But it is overcoming these challenges that allows participants
                to demonstrate their mastery and become a leader.</div>
        </div>
    </div>
    <div className={styles["box10-wrapper"]}>
        <div className={styles["box10"]}>
            <div className={styles["text"]}>To reach the top, you will have to put in a lot of effort
                 and spend a lot of time solving various problems.</div>
        </div>
                            </div>
                        </div>
                    </div>
                </div>
               </section>
        
        </main>
        </div>
        </div>
        <Footer/>
    </div>
    )
}
export default MainPage
