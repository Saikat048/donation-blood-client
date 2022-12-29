import React from 'react';
import './Loading.css';

const Loading = () => {
    return (
        <div className="flex items-center justify-center mt-20">
            <div class="loader">
                <div class="face">
                    <div class="circle"></div>
                </div>
                <div class="face">
                    <div class="circle"></div>
                </div>
            </div>
        </div>
    );
};

export default Loading;