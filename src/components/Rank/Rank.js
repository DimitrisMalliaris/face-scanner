import React from 'react';

const Rank = ({name, entries}) => {
    return (
        <div className='rank ma3 pa2 mt4 pt4'>
            <div className='white f3'>
                {`${name}, your current face count...`}
            </div>
            <div className='white f1'>
                {`#${entries}`}
            </div>
        </div>

    );
}

export default Rank;