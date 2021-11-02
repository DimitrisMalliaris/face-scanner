import React from 'react';
import './ImageLinkForm.css';

const ImageLinkForm = ({ onInputChange, onImageSubmit }) => {
    return (
        <div className='pa2 ma2'>
            <p className='f3'>
                {'Hello, this is a face scanner app. Give it a try!'}
            </p>
            <div className='center'>
                <div className='form center pa4 br3 shadow-5'>
                    <input className='br2 f4 pa2 w-70 center' 
                        type='text' 
                        onChange={onInputChange}
                    />
                    <button className='w-30 grow f4 link ph3 br2 b--light-blue pv2 dib white bg-blue' 
                        onClick={onImageSubmit}>
                        Detect
                    </button>
                </div>
                </div>
        </div>
    );
}

export default ImageLinkForm;