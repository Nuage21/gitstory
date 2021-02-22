import React from 'react';

class MainApp extends React.Component{

    constructor(props)
    {
        super(props);
    }

    render()
    {
        return (
            <div id="mainapp-container">
                <div id="filexp-container">
                    <h1>File Explorer Here </h1>
                </div>
                <div id="code-editor-container">
                    <h1>Code Editor Here </h1>
                </div>
                <div id="git-graph-container">
                    <h1>Git Graph Here </h1>
                </div>
            </div>
        );
    }
}

export default MainApp;