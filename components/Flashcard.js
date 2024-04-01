import React, {useState} from 'react';

const FlashCard = ({ flashcard }) => {
    const [flip, setFlip] = useState(true)
    return (
        <div className={`flex justify-center items-center relative rounded-md bg-white shadow-custom size-250 transform-preserve-3d 
                        cursor-pointer transition-all duration-150 shadow-2xl text-custom-blue ${flip ? 'rotateY-180' : ''}`} onClick={() => { setFlip(!flip) }}>
            <div className='absolute p-4 backface-hidden'>
                {flashcard.language1}
            </div>
            <div className='absolute p-4 rotateY-180 backface-hidden'>{flashcard.language2}</div>
        </div>
    )
}

export default FlashCard