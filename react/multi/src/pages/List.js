import React from 'react'

class List extends React.Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        console.log(this.props.activities);
        const listItems = this.props.activities.map((activity, index) => 
          <li key={activity.activity}>{activity.activity}</li>
        );
    
        return (
            <div className="content list">
                <h1>My Activities</h1>
                <div id="activity">
                    <ul>{listItems}</ul>
                </div>
            </div>
        );
    }
};

export default List;