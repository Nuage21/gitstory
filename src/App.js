import React from 'react';
import HomePage from './homepage'

class App extends React.Component{
    constructor(props){
        super(constructor);
        this.runApp = this.runApp.bind(this);
        this.state = {
            weOnHomepage: true,
        };
    }

    runApp() // will run upon input of a valid phisically reachable github repo
    {
        this.setState({weOnHomepage: false}); // hide repoInput Page
    }

    render(){
        let whatToWhow = <HomePage runApp={this.runApp} />;
        if(this.state.weOnHomepage == false)
            whatToWhow = <h1> Hello On the Main App </h1>;
        return (
            <div>
                {whatToWhow}           
            </div>
        );
    }
}

export default App;
