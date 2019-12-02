import React, {Component} from "react";
import {Cell, Grid} from "react-mdl";
import Education from "./education"
import Skills from './skills';
import Experience from "./experience";

class Resume extends Component {
    render(){
        return(
            <div>
                <Grid>
                    <Cell col={4}>
                        <div style={{textAlign: 'justify'}}>
                            <img
                            src="https://i.imgur.com/7qHg4Vn.jpg"
                            alt="avatar"
                            style={{height: '200px', textAlign: 'center'}}
                            />

                        </div>
                        <h2 style={{paddingTop: '2em'}}>Nate Nkumbu</h2>
                        <h4 style={{color: 'grey'}}>Programmer</h4>
                        <hr style={{borderTop: '3px soild #833fb2', width: '50%'}}/>
                        <p>
                            A Few things to know about me: I am a former report that just completed Thinkful's fullstack bootcamp
                            and has worked on few project that contain HTML/CSS, Javascript, jQuery, React, Node.js and PostgreSQL. 

                            When I'm not coding, You can catch me taking photos, learing how to video edit and updating my Techno music folder. Outside
                            of breaking and tearing apart a computer, I enjoy walks outside, cooking, catching up on my favorite T.V shows, and going to warehouse
                            parties.  

                        </p>
                        <hr style={{borderTop: '3px soild #833fb2', width: '50%'}}/>
                        <h5>Address</h5>
                        <p>7503 Cypress Pin Oak Drive, Cypress TX, 77433</p>
                        <h5>Phone</h5>
                        <p>561-729-7024</p>
                        <h5>Email</h5>
                        <p>nnkumbu94@gmail.com</p>
                    </Cell>
                    <Cell className="resume-right-col" col={8}>
                        <h2>Education</h2>
                        <Education
                         startYear={2012}
                         endYear={2015}
                         schoolName="Palm Beach State College"
                         schoolDescription="State College where I earned my A.A in General Studies"
                        />

                        <Education
                        startYear={2016}
                        endYear={2018}
                        schoolName="Florida Atlantic University"
                        schoolDescription=" State University where I earned a B.S in English langauge and Literature"
                        />

                        <Education
                        startYear={2019}
                        endYear={2019}
                        schoolName="THINKFUL"
                        schoolDescription="Learned industry best practices and practical software development standards with a focus on HTML5, CSS3, JavaScript, jQuery, Node.js, React, Redux, and algorithms & data structures. Also,
                        Created and deployed mobile-first applications while learning new languages and frameworks by collaborating several hours every week with a senior web developer"
                        />

                        <hr style={{borderTop: '3px solid #e22947'}} />
                        <h2>Experience</h2>

                        <Experience
                        startYear={2016}
                        endYear={2018}
                        jobName="UNIVERSITY PRESS FAU"
                        jobDescription="Created and wrote bi-weekly news stories ranging from student government and BOT covering a college campus of over 35,000 people."
                        />

                        <Experience
                        startYear={2018}
                        endYear={2018}
                        jobName="DORCHESTER STAR/APG"
                        jobDescription="Created and wrote weekly news stories covering city and county events for around 1.5 million people in Eastern Maryland and a county of 30,000 people."
                        />

                        <Experience
                        startYear={2018}
                        endYear={2019}
                        jobName="POWER HOME AND REMODELING"
                        jobDescription="Worked in Distribution, getting customers to sign up for a free estimate for Power home products in an area around 6 million people."
                        />
                    
                        
                        <hr style={{borderTop: '3px solid #e22947'}} />
                        <h2>Skills</h2>
                        <Skills
                        skill="Javascript"
                        progress={100}
                        />

                        <Skills
                        skill="HTML/CSS"
                        progress={88}
                        />
                        <Skills
                        skill="React"
                        progress={75}
                        />

                        <Skills
                        skill="Node.js"
                        progress={60}
                        />    
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Resume;