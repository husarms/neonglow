import React, { Component } from 'react';

class Jumbotron extends Component {
    render() {
        return (
            <div className="jumbotron bg-transparent mb-0 radius-0">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6">
                            <h1 className="display-2">Neon Glo<span className="vim-caret">w</span></h1>
                            <div className="lead mb-3 text-mono text-success">This is a starter template with a jumbotron</div>
                            <div className="text-mono">
                                <a href="#!"
                                    title="Download Theme"
                                    className="btn btn-success btn-shadow px-3 my-2 ml-0 text-left">
                                    A Button
                                </a>
                                <a href="#!"
                                    className="btn btn-danger btn-shadow px-3 my-2 ml-0 ml-sm-1 text-left">
                                    Another Button
                                </a>
                            </div>
                            <div className="text-darkgrey text-mono my-2">Some muted text</div>
                            <p className="mt-5 text-grey text-spacey">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto, dignissimos provident. Alias, aliquid, cum cumque deleniti dignissimos eos exercitationem explicabo illum inventore laboriosam nihil nobis nostrum praesentium recusandae sequi, sint!
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Jumbotron;
