import React,{Component} from 'react';
import CardList from '../components/CardList';
import {Robots} from '../Robots';
import SearchBox from '../components/SearchRobot';
import './App.css';
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary';

class App extends Component {
    constructor(){
        super()
        this.state={
            Robots:Robots,
            SearchField:''
        }
    }
    onSearch=(event)=>{
        this.setState({SearchField:event.target.value});
    }
    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => this.setState({Robots: users}));
    }

    render(){
        const {Robots, SearchField} = this.state;
        const filterRobot =Robots.filter(robot =>{
            return robot.name.toLowerCase().includes(SearchField.toLowerCase());
        })
        if(!Robots.length){
            return <h1 className ='tc'> Loading </h1>
        } else {
            return (
                <div className ='tc'>
                    <h1 className="f1" >Robo Friends</h1>
                    <SearchBox searchChange={this.onSearch}/>
                    <Scroll>
                        <ErrorBoundary>
                            <CardList Robots={filterRobot} />   
                        </ErrorBoundary>
                    </Scroll>     
                </div>   
            );
        }
    } 
}
export default App;