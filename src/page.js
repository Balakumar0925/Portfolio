import React from 'react';
import {Row,Col ,Container,Button,Image} from 'react-bootstrap';
import  './page.css';
import photo from './photo.jpeg';
 
class Pageview extends React.Component{


    render(){
        return (
            <div>
            <header>
                <h2 className='header'>MY PORTFOLIO</h2>
            </header>
                  <Container>
                     <div>
                         <Row className='header-text2'>
                             <Col xs={6} md={12}>
                                 <h3 className='header-text2'>BALA KUMAR S</h3>
                                 <h2 >FullStack Developer | Software Engineer</h2>
                             </Col>
                         </Row>
                         <Row className='header-text2'>
                             <Col xs={12} md={8}>
                             <p className='t'>I am a fresher with good understanding on Fullstack development . I always look for opportunities that
                                      give me immense learning and constantly improve my skills over time. I look forward to join as an entry
                                      level engineer in an organization , where I would like to learn and share knowledge with my peers.</p>
                        </Col>
                        <Col xs={6} md={4} >
                        <Image className='image' src={photo} width="180px" height='150px' roundedCircle></Image>
                        </Col>
                        </Row>
                     </div>
                     
                     <div>
                     <Row className='bg-color'>
                         <Col xs={12} md={6} >
                         <h5 className='ml'>kumarbala320@gmail.com </h5>   
                         </Col>
                         <Col xs={12} md={6}>
                         <h5 className='ph'>9786216746</h5>
                         </Col>
                      </Row>
                      <Row className='bg-color'> 
                          <Col xs={12} md={6} >
                          <h5 className='lo'>33/16, 4th Cross street, Moogambigai Nagar,Tirunelveli,   Tamil Nadu </h5>
                                 </Col>
                           <Col xs={12} md={6} className='li'>linkedin.com/in/bala-kumar-68a001133
                           </Col>      
                      </Row>
                     </div>
                     
                     <div>
                         <Container>
                             <Row>
                                 <Col xs={12} md={6} className='sub-head'> <u>EDUCATION</u>
                                         <Row>
                                             <Col className=''>
                                                 <u>COLLEGE</u> <br/>
                                                 <h5>Dr.Sivanthi Aditanar College of Engineering <br/>
                                                 Tiruchendur,Tuticorin  <br/>
                                                 (07/2013-04/2017) </h5>
                                             </Col>
                                         </Row>
                                         <Row>
                                             <Col xs={8} md={12}>
                                                 <ul className='college'>
                                                     <li>
                                                         Computer Science and Engineering
                                                     </li>
                                                     <li>
                                                         PROJECT: <u/> Android
                                                            Application For Container
                                                             Locating System
                                                     </li>
                                                     <li>
                                                         <u>CGPA:</u>6.09
                                                     </li>
                                                 </ul>
                                             </Col>
                                         </Row>
                                 </Col>
                             <Col xs={12} md={6}>
                                    <u className='sub-head'>SKILLS</u> <br/>
                                     <Button className='bt'>Nodejs </Button>
                                     <Button className='bt'>Reactjs</Button> 
                                     <Button className='bt'>Mongodb</Button>
                                     <Button className='bt'>GitHub</Button>
                                     <Button className='bt'>Expressjs</Button>
                                     <Button className='bt'>Redux</Button>
                                     <Button className='bt'>Javascript</Button>
                             </Col>
                             </Row>
                            
                         </Container>
                     </div>
                     
                     <div>
                         <Container>
                             <Row>
                             <Col xs={8} md={6}>
                             
                                 <h4> <u>PERSONAL PROJCTS </u> </h4> 
                                     <ul className='content'>
                                         <li>
                                         <h4 className='sub-head'>Bike Service Application</h4>
                                          Frontend- ReactJS , React-Router, React-Bootstrap, Axios <br/>
                                          Backend - ExpressJS, MongoDB <br/>
                                          Application which allows users to book a service with a vendor
                                          Shop Owner can manage the services that is being offered in his
                                          shop through this application <br/>
                                          Application can mail and notify the users on the status of the
                                          service booking, once the bike is ready for delivery <br/>
                                          <a href="https://bikeserviceapplication.herokuapp.com/">BIKE-SERVICE APPLICATION</a> <br/>
                                          <a href="https://github.com/Balakumar0925/BikeServiceApplication">GitHub</a>
                                         </li>
                                         <li>
                                          <h4 className='sub-head'> ToDo App </h4>
                                          Application to manage and monitor one's daily tasks and it's
                                          progress <br/>
                                          Learnt and practiced React, React-Redux, Redux Middleware ,
                                          Redux Thunk, Axios <br/>
                                          <a href="https://reduxtodolist.herokuapp.com/">TODO APP</a> <br/>
                                          <a href="https://github.com/Balakumar0925/ReactRedux">Github</a>
                                         </li>
                                         <li>
                                          <h4 className='sub-head'>Mongo CRUD service </h4>
                                          Created a helper script, that can do CRUD operation on a Mongo Database <br/>
                                          The helper script can be used on any JavaScript application that
                                          uses mongo database. <br/>
                                          
                                          <a href="https://github.com/Balakumar0925/mongoCrudService">GitHub</a>
                                         </li>
                                     </ul>
                                 </Col>    
                                 <Col xs={8} md={6}> 
                                 <Row>
                                     <h4> <u> PERSONAL LEARNING </u>  </h4> 
                                     <ul className='content'>
                                         <li>
                                         <h4 className='sub-head'>Udemy: Modern React with Redux </h4> 
                                            Master React and Redux with React Router, Webpack, and Create-React-
                                            App. Includes Hooks!
                                         </li>
                                         <li>
                                          <h4 className='sub-head'>Udemy: Azure DevOps Fundamentals for Beginners </h4>
                                            Master the essentials and the tricky bits: rebasing, squashing, stashing,
                                            trees, commit & more
                                         </li>
                                         <li>
                                          <h4 className='sub-head'>Udemy: ExpressJS Fundamentals </h4>
                                            A Beginner's Guide to Building RESTful Web Applications with NodeJS
                                            and Express 
                                         </li>
                                     </ul> 
                                     </Row>
                                 </Col>
                             </Row>
                         </Container> 
                        
                         <Container>
                             <Row>
                                 <Col>
                                 <u className='sub-head'>LANGUAGES </u> <br/>
                                  <Button className="bt">Tamil</Button>
                                  <Button className="bt">English</Button>

                                 </Col>
                                 <Col>
                                 <u className='sub-head'>
                                 INTERESTS
                                 </u> <br/>
                                     <Button className='bt'>Nodejs </Button>
                                     <Button className='bt'>Reactjs</Button> 
                                     <Button className='bt'>Mongodb</Button>
                                     <Button className='bt'>GitHub</Button>
                                     <Button className='bt'>Expressjs</Button>
                                     <Button className='bt'>Redux</Button>
                                     <Button className='bt'>Javascript</Button>
                                     <Button className='bt'>Web development</Button>
                                     <Button className='bt'>AI</Button>
                                     <Button className='bt'>Microsoft Azure</Button>
                                 </Col>
                             </Row>
                         </Container>

                     </div>
                </Container>

            </div>
        )
    }
}

export default Pageview;