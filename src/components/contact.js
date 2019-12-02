import React, {Component} from "react";
import { Cell,Grid, List, ListItem } from "react-mdl";

class Contact extends Component {
    render(){
        return(
            <div className="contact-body">
                <Grid className="contact-grid">
                    <Cell col={6}>
                        <h2>Nathael Nkumbu</h2>
                        <img
                        src="https://i.imgur.com/iMCeluT.png"
                        alt="avatar"
                        style={{height: "250px"}}
                        />
                        <p style={{width: '110%', margin: 'auto', paddingTop: '1em'}}> I’m a Web Developer that has experience and knowledge in Front End language like HTML5, CSS3, React, jQuery and JavaScript. I enjoy working on computers and also building applications 
                        that can improve the lives of people or help them pass the time.    
                       </p>
                    </Cell>
                    <Cell col={6}>
                        <h2>Contact</h2>
                        <hr/>
                       <div className="contact-list">
                        <List>
                            <ListItem>Phone: 561-729-7024</ListItem>
                            <ListItem>Email: nnkumbu94@gmail.com</ListItem>
                        </List>
                      </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Contact;