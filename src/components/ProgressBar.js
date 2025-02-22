import React from 'react';
import './ProgressBar.css';

function ProgressBar(props) {
    // let progressFillWidth = '0%';

    // let counter = 0;

    // if (counter === 1) {
    //     progressFillWidth = 50 + '%';
    // }

    // const progressWidth = 155;

    // const progressBarChangeHandler = () => {
    //     const progressBreath = progressWidth
    //     props.onChangeProgressWidth(progressBreath);
    // }

    let progressBarWidth = props.progress * 100 + '%';

    return (
        <div className="progress" id="progressBar" style={{ width: progressBarWidth }}></div>
    );
}

export default ProgressBar;