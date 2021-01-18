import React ,{Component} from 'react';
import axios from 'axios';
import {WorkPart,WorkSection,WorkTitle,Span,Line,Icon,PartDesc,PartTitle} from'./Style.js'


class Work extends Component{

state = {
    works :[]
}
componentDidMount(){
    axios.get('js/data.json').then(res =>{this.setState({
        works : res.data.works
    })})
}

    render(){

        const {works} = this.state;
        const workList = works.map((workItem)=>{
            return(
                <WorkPart first={workItem.id} key={workItem.id}>
                    <Icon className={workItem.icon_name}></Icon>
                    <PartTitle>{workItem.title}</PartTitle>
                    <Line/>
                    <PartDesc>
                       {workItem.body}
                    </PartDesc>
                </WorkPart>
            )
        })
        return(
        <WorkSection>
            <div className="container">
                <WorkTitle><Span>OUR</Span> Work</WorkTitle>
                
                  {workList} 
                
            </div>
        </WorkSection>
            );
    }
  
}
export default Work ;