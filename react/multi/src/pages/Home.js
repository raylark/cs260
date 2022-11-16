import React from "react";
import axios from 'axios';

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {curActivity: ''}
        
        this.getActivity = this.getActivity.bind(this);
        this.getActivity();
        this.addClass = this.addClass.bind(this);
    }
    
    getActivity() {
        var url = 'https://www.boredapi.com/api/activity/';
        axios.get(url)
        .then(response => {
        let curActivity = response.data.activity;
        this.setState({ curActivity: curActivity }); 
        return true;
        })
        .catch(error => {
        console.log(error)
        });
    }
    
    addClass() {
        document.getElementById("activity").classList.remove("hide");
    }
    
    render() {
        return (
            <div className="content home">
                <h1>Activity Generator</h1>
                <div id="activity">
                    <span>{this.state.curActivity}</span>
                    <button onClick={this.props.addActivity} value={this.state.curActivity}>+</button>
                </div>
                <button onClick={ () => {this.getActivity(); this.addClass()} }>Get Activity</button>
            </div>
        );
    }
}

export default Home;