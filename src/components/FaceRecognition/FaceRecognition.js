import React from 'react';
import './FaceRecognition.css';

const FaceRecognition = ({boxes, imageURL}) => {
    const boundingBoxes = boxes.map((box, index) => {
        return (
            <div key={index} 
                className='bounding-box'
                style={{top: box.top, 
                    right: box.right, 
                    bottom: box.bottom, 
                    left: box.left
                }}>
            </div>
        );
    })

    return(
        <div className='center ma'>
            <div className='absolute mt2'>
                <img id='inputImage' 
                    src={imageURL} 
                    alt='face' 
                    width='500px' 
                    height='auto'/>
                <div>
                    {boundingBoxes}
                </div>
            </div>
        </div>
    );
}

export default FaceRecognition;