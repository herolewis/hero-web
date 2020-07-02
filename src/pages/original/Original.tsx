import React from 'react';
import './Original.scss';


const Original = () => {
    return (
        <div className="Original">
            <div className="circle">
                <div className="camera -x">
                    <div className="camera -y">
                        <div className="camera -z">
                            <div className="particles">
                                {
                                    new Array(200).fill('').map((item,index) => {
                                        return (
                                            <div className="particle" key={index}>
                                                <div className="rotate">
                                                    <div className="part">
                                                        <div className="rotatefollow">
                                                            <div className="camerafollow -z">
                                                                <div className="camerafollow -y">
                                                                    <div className="camerafollow -x">
                                                                        <div className="graphic"></div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Original;