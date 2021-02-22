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
                <div id="top-container">
                    <div id="filexp-container">
                        filexo
                    </div>
                    <div id="code-editor-container">
                    </div>
                </div>
                <div id="git-graph-container">
                </div>
            </div>
        );
    }
}

export default MainApp;