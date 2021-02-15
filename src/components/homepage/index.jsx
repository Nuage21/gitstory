import React, { useState } from 'react';
import { Button, Grid, TextField } from '@material-ui/core';
const HomePage = () => {
    const [url, setUrl] = useState('')
    return (
        <>
            <Grid
                container
                className="Parent"
                style={{ display: 'flex', flexDirection: 'row', justifyContent: "center", width: '100%', height: '90vh' }}
            >
                <Grid
                    item xs={12} sm={12} md={5} lg={5}
                    container
                    className="ChildContainer"
                    style={{ display: 'flex', flexDirection: 'column', justifyContent: "center", height: '100%' }}
                >

                    <div className="header-container">
                        <div id="branch-logo-cont">
                            <img src="img/merge.png" alt="branch logo" id="branch-logo" />
                        </div>
                        <span className="gt-header" id="header-git">git</span>
                        <span className="gt-header" id="header-story">Story</span>
                        <span>
                            <img src="img/file.png" alt="file logo" id="file-logo" />
                        </span>
                    </div>
                    <div id="subtitle-cont">
                        <span>Empowering Visualization</span>
                    </div>

                    <form noValidate autoComplete="off">
                        <TextField
                            value={url}
                            fullWidth
                            placeholder="https://github.com/imabp/collabs"
                            label="Repo URL"
                            onChange={(e)=>{setUrl(e.target.value)}}
                            variant="outlined" />
                        <br /><br /><center>
                            <Button type="submit" value="Visualize" variant="contained"
                            
                            >
                                Visualize
                            </Button> </center>
                    </form>
                </Grid>
                
            </Grid>
<br/><br/>{url}
        </>
    )

}
export default HomePage;