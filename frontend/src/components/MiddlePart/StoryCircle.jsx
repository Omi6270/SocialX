import { Avatar } from '@mui/material';
import React from 'react';

const StoryCircle = () => {
    return (
        <div>
            <div className='flex flex-col items-center mr-4 cursor-pointer ' >
                    <Avatar
                        sx={{ width: "5rem", height: "5rem" }}
                      src="https://cdn.pixabay.com/photo/2019/04/16/17/17/ron-4132263_960_720.jpg" 
                    >

                    </Avatar>
                    <p>Ronald Weasley</p>
                </div>
        </div>
    )
}

export default StoryCircle
