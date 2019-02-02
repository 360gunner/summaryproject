import React from 'react';
import './Posts.css'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';



const Posts = () => {
	return (
		<Tabs className="tabtab">
    <TabList>
      <Tab>Summary</Tab>
      <Tab>Skills</Tab>
      <Tab>Experience</Tab>
      <Tab>Education</Tab>
      <Tab>Interests</Tab>
    </TabList>

    <TabPanel className="tl v-mid fontaze">
    

    <div className="dt dt--fixed w-100">
    <div className="dtc yes">{'\u00A0'}{'\u00A0'}
    <img className="pic tc v-mid pa10 ma10 dib v-mid ba b--blue bw2" src="https://scontent-mrs1-1.xx.fbcdn.net/v/t1.0-9/fr/cp0/e15/q65/50605868_790701317956437_5210429963005591552_o.jpg?_nc_cat=108&efg=eyJpIjoidCJ9&_nc_ht=scontent-mrs1-1.xx&oh=d89236d7dcf20cc9cd760372107ae61a&oe=5CBA6778" />
    </div>
    <div className="dtc">
      <h2>Professional Summary</h2>
      <p>
      	Experienced software engineer with a passion for developing innovative programs that expedite the efficiency and effectiveness of organizational success. Well-versed in technology and writing code to create systems that are reliable and user-friendly. Skilled leader who has the proven ability to motivate, educate, and manage a team of professionals to build software programs and effectively track changes. Confident communicator, strategic thinker, and innovative creator to develop software that is customized to meet a company’s organizational needs, highlight their core competencies, and further their success.
      </p>
    </div>
    </div>


    </TabPanel>
    <TabPanel className="tc v-mid fontaze">
    

    <div className="dt dt--fixed w-100">
    <div className="dtc">
      <h2>Skills</h2>
      <p>
      	-Well-versed in software tools including HTML, CSS, JavaScript, Python and Java among others. -Skilled at reading and writing code using viable inputs and outputs after accurate assessment of pre- and post-conditions. -Experienced at working with Oracle databses . -Confident problem-solving abilities to overcome glitches with creative solutions that are strategically designed to last long-term. -Strong communication skills and the ability to listen carefully to user feedback to determine modifications for optimal user-function.
      </p>
    </div>
    </div>


    </TabPanel>
    <TabPanel className="tc v-mid fontaze">


    <div className="dt dt--fixed w-100">
    <div className="dtc">
    <h2>Work Experience</h2>
      <p>
      Painter {'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}-2017 <br/> 
      	Software Engineer  {'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'} -present
        <br/>
Developed and designed critical software programs for networks and AI like my github network projects and a matlab signlanguage recogniser.
Optimized user effectiveness by creating a detailed feedback queue for users to discuss functionality, convenience, and effectiveness.
Oversee a team of three software developers and lead weekly discussions to brainstorm ideas in software development and to track changes made in existing programs.
      </p>
    </div>
    </div>


    
    </TabPanel>
    <TabPanel className="tc v-mid fontaze">
    <div className="dt dt--fixed w-100">
    <div className="dtc">
      <h2>Education</h2>
      <p>
      	USTHB.Bachelor of Information Systems and Software Engineering 2015-2018.
      <br/>
      	USTHB. Master of Software Engineering 2018-present.
      </p>
      </div>
    </div>


    </TabPanel>
    <TabPanel className="tc v-mid fontaze">

    <div className="dt dt--fixed w-100">
    <div className="dtc">
      <h2>Hobbies and Interests</h2>
      <p>
      	I enjoy volunteering weekly at the local Boys and Girls club where I teach youth how to write code. I am an online games lover .I enjoy frequent trips with my family. I also appreciate a good movie or soccer match.
      </p>
      </div>
    </div>


    </TabPanel>
  </Tabs>
		)
};

export default Posts;