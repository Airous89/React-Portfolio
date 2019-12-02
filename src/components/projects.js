import React, {Component} from "react";
import { Tabs,Tab,Grid,Cell,Card, CardTitle, CardActions, Button, CardMenu, IconButton,CardText  } from "react-mdl";

class Project extends Component {
    constructor(props){
        super(props);
        this.state = {activeTab: 0};
    }

    toggleCategories (){
        if(this.state.activeTab === 0){
            return(
                <div className="projects-grid">

                    <Card shadow={5} style={{minWidth: '450', margin:'auto'}}>
                        <CardTitle style={{color: 'aliceblue', height: '178px', background: 'url(https://s3-us-west-2.amazonaws.com/devcodepro/media/tutorials/funciones-en-javascript-t1.png) center/cover'}}>Quiz App</CardTitle>
                        <CardText>
                        Here is a basic quiz app that I built on house music and the history behind my favorite genre of music using HTML,CSS, and jQuery
                        </CardText>
                        <CardActions border>
                        <Button colored ><a href="https://airous89.github.io/Quiz-Full/" onClick>Live Demo</a></Button>
                        <Button colored><a href="https://github.com/Airous89/Quiz-Full" onClick>Git Repo</a></Button>  
                        </CardActions>
                        <CardMenu style={{color: 'fff'}}>
                            <IconButton name="share"/>
                        </CardMenu>
                    </Card>

                    

                        <Card shadow={5} style={{minWidth: '450', margin:'auto'}}>
                            <CardTitle style={{color: 'aliceblue', height: '178px', background: 'url(https://s3-us-west-2.amazonaws.com/devcodepro/media/tutorials/funciones-en-javascript-t1.png) center/cover'}}>Food Search/Recipe App</CardTitle>
                            <CardText>
                            Here is a Recipe App that I built with the TheMealDB's API that returns a list of recipes with a youtube video and the the list of ingredents using HTML,CSS, and AJAX/JSON.
                            </CardText>
                            <CardActions border>
                            <Button colored><a href="https://airous89.github.io/Recipe-api/" onClick>Live Demo</a></Button>
                            <Button colored><a href="https://github.com/Airous89/Recipe-api" onClick> Git Repo</a></Button>  
                            </CardActions>
                            <CardMenu style={{color: 'fff'}}>
                                <IconButton name="share"/>
                            </CardMenu>
                        </Card>
                </div>
            )
        } else if (this.state.activeTab === 1){
            return(
                <div className="projects-grid">
                     <Card shadow={5} style={{minWidth: '450', margin:'auto'}}>
                        <CardTitle style={{color: 'aliceblue', height: '178px', background: 'url(https://miro.medium.com/max/1200/1*y6C4nSvy2Woe0m7bWEn4BA.png) center/cover'}}>React Calculator </CardTitle>
                        <CardText>
                        A Calculator that was built and operates strictly on React. Made with some Insperation from a tutorial from Medium
                        </CardText>
                        <CardActions border>
                        <Button colored><a href="https://calculator-1-weld-ten.now.sh/" onClick>Live Demo</a></Button>
                        <Button colored><a href="https://github.com/Airous89/change-calculator" onClick> Git Repo</a></Button>  
                        </CardActions>
                        <CardMenu style={{color: 'fff'}}>
                            <IconButton name="share"/>
                        </CardMenu>
                    </Card>

                    <Card shadow={5} style={{minWidth: '450', margin:'auto'}}>
                        <CardTitle style={{color: 'aliceblue', height: '178px', background: 'url(https://miro.medium.com/max/1200/1*y6C4nSvy2Woe0m7bWEn4BA.png) center/cover'}}>React Project 2</CardTitle>
                        <CardText>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen
                        </CardText>
                        <CardActions border>
                        <Button colored>GitHub</Button>
                        <Button colored>LiveDemo</Button>  
                        </CardActions>
                        <CardMenu style={{color: 'fff'}}>
                            <IconButton name="share"/>
                        </CardMenu>
                    </Card>
                </div>
            )
        } else if (this.state.activeTab ===  2){
            return(
                <div className="projects-grid">
                    <Card shadow={5} style={{minWidth: '450', margin:'auto'}}>
                        <CardTitle style={{color: 'black', height: '178px', background: 'url(https://gp1.wac.edgecastcdn.net/802B761/fh/assets/blog/2017-07/node.png) center/cover'}}>Express Project 1</CardTitle>
                        <CardText>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen
                        </CardText>
                        <CardActions border>
                        <Button colored>GitHub</Button>
                        <Button colored>LiveDemo</Button>  
                        </CardActions>
                        <CardMenu style={{color: 'fff'}}>
                            <IconButton name="share"/>
                        </CardMenu>
                    </Card>

                    <Card shadow={5} style={{minWidth: '450', margin:'auto'}}>
                        <CardTitle style={{color: 'black', height: '178px', background: 'url(https://gp1.wac.edgecastcdn.net/802B761/fh/assets/blog/2017-07/node.png) center/cover'}}>Express Project 2</CardTitle>
                        <CardText>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen
                        </CardText>
                        <CardActions border>
                        <Button colored>GitHub</Button>
                        <Button colored>LiveDemo</Button>  
                        </CardActions>
                        <CardMenu style={{color: 'fff'}}>
                            <IconButton name="share"/>
                        </CardMenu>
                    </Card>

                    <Card shadow={5} style={{minWidth: '450', margin:'auto'}}>
                        <CardTitle style={{color: 'black', height: '178px', background: 'url(https://gp1.wac.edgecastcdn.net/802B761/fh/assets/blog/2017-07/node.png) center/cover'}}>Express Project 3</CardTitle>
                        <CardText>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen
                        </CardText>
                        <CardActions border>
                        <Button colored>GitHub</Button>
                        <Button colored>LiveDemo</Button>  
                        </CardActions>
                        <CardMenu style={{color: 'fff'}}>
                            <IconButton name="share"/>
                        </CardMenu>
                    </Card>
                </div>
            )
        } else if (this.state.activeTab === 3){
            return(
                <div className="projects-grid">
                     <Card shadow={5} style={{minWidth: '450', margin:'auto'}}>
                        <CardTitle style={{color: 'black', height: '178px', background: 'url(data:image/png;base64,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) center/cover'}}>PostgreSQL Project 1</CardTitle>
                        <CardText>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen
                        </CardText>
                        <CardActions border>
                        <Button colored>GitHub</Button>
                        <Button colored>LiveDemo</Button>  
                        </CardActions>
                        <CardMenu style={{color: 'fff'}}>
                            <IconButton name="share"/>
                        </CardMenu>
                    </Card>
                </div>
            )
        }

    }



    render(){
        return(
           <div className="category-tabs">
               <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({activeTab: tabId})} ripple>
                   <Tab>JavaScript</Tab>
                   <Tab>React</Tab>
                   <Tab>Express</Tab>
                   <Tab>PostgreSQL</Tab>
               </Tabs> 
                   <Grid>
                       <Cell col={12} phone={2}>
                           <div className="content">{this.toggleCategories()}</div>

                       </Cell>
                   </Grid>
           </div>
        )
    }
}

export default Project;