import React from 'react';

function Modal() {
    return(
        <div>
            <div className="modal fade" id="match3Modal">
                <div className="modal-dialog modal-sm">
                    <div className="modal-content">

                        <div className="modal-header">
                            <h4 className="modal-title">Sample</h4>
                            <button type="button" className="close" data-dismiss="modal">&times;</button>
                        </div>

                        <div className="modal-body">
                            <video width="260" controls>
                                <source src={require("../assets/videos/match3-game-vid.mp4")} type="video/mp4" />
                                Your browser does not support HTML5 video.
                            </video>
                        </div>

                    </div>
                </div>
            </div>

            <div className="modal fade" id="deebchibiModal">
                <div className="modal-dialog modal-sm">
                    <div className="modal-content">

                        <div className="modal-header">
                            <h4 className="modal-title">Sample</h4>
                            <button type="button" className="close" data-dismiss="modal">&times;</button>
                        </div>

                        <div className="modal-body">
                            <video width="260" controls>
                                <source src={require("../assets/videos/deeb-chibi-vid.mp4")} type="video/mp4" />
                                Your browser does not support HTML5 video.
                            </video>
                        </div>

                    </div>
                </div>
            </div>

            <div className="modal fade" id="timbrModal">
                <div className="modal-dialog modal-sm">
                    <div className="modal-content">

                        <div className="modal-header">
                            <h4 className="modal-title">Sample</h4>
                            <button type="button" className="close" data-dismiss="modal">&times;</button>
                        </div>

                        <div className="modal-body">
                            <video width="260" controls>
                                <source src={require("../assets/videos/timbr-vid.mp4")} type="video/mp4" />
                                Your browser does not support HTML5 video.
                            </video>
                        </div>

                    </div>
                </div>
            </div>

            <div className="modal fade" id="gidiModal">
                <div className="modal-dialog modal-sm">
                    <div className="modal-content">

                        <div className="modal-header">
                            <h4 className="modal-title">Sample</h4>
                            <button type="button" className="close" data-dismiss="modal">&times;</button>
                        </div>

                        <div className="modal-body">
                            <video width="260" controls>
                                <source src={require("../assets/videos/gidi-vid.mp4")} type="video/mp4" />
                                Your browser does not support HTML5 video.
                            </video>
                        </div>

                    </div>
                </div>
            </div>

            <div className="modal fade" id="alienModal">
                <div className="modal-dialog modal-sm">
                    <div className="modal-content">

                        <div className="modal-header">
                            <h4 className="modal-title">Sample</h4>
                            <button type="button" className="close" data-dismiss="modal">&times;</button>
                        </div>

                        <div className="modal-body">
                            <video width="260" controls>
                                <source src={require("../assets/videos/alien.mp4")} type="video/mp4" />
                                Your browser does not support HTML5 video.
                            </video>
                        </div>

                    </div>
                </div>
            </div>

            <div className="modal fade" id="dodgeredModal">
                <div className="modal-dialog modal-sm">
                    <div className="modal-content">

                        <div className="modal-header">
                            <h4 className="modal-title">Sample</h4>
                            <button type="button" className="close" data-dismiss="modal">&times;</button>
                        </div>

                        <div className="modal-body">
                            <video width="260" controls>
                                <source src={require("../assets/videos/dodge-reds-vid.mp4")} type="video/mp4" />
                                Your browser does not support HTML5 video.
                            </video>
                        </div>

                    </div>
                </div>
            </div>

            <div className="modal fade" id="meetappModal">
                <div className="modal-dialog modal-sm">
                    <div className="modal-content">

                        <div className="modal-header">
                            <h4 className="modal-title">Sample</h4>
                            <button type="button" className="close" data-dismiss="modal">&times;</button>
                        </div>

                        <div className="modal-body">
                            <video width="260" controls>
                                <source src={require("../assets/videos/web-geo-vid.mp4")} type="video/mp4" />
                                Your browser does not support HTML5 video.
                            </video>
                        </div>

                    </div>
                </div>
            </div>

            

        </div> // end of modal container
    );
}

export default Modal;