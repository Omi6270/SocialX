import { Avatar, Card, CardHeader, IconButton } from '@mui/material';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import React from 'react';
import { useSelector } from 'react-redux';

const UserChatCard = ({chat}) => {
    const {message, auth} = useSelector(store=>store);
    return (
        <Card>
            <CardHeader avatar={
                <Avatar sx={{ width: "3.5rem", height: "3.5rem", fontSize: "1.5rem", bgcolor: "#191c29", color: "rgb{88,199,250}" }}
                    src='https://cdn.pixabay.com/photo/2024/02/10/15/03/flowers-8564948_640.png' />
            } action={
                <IconButton>
                    <MoreHorizIcon />
                </IconButton>
            }
                title= {auth.user.id===chat.user[0].id?chat.user[1].firstName + " " +chat.user[1].lastName:
                    chat.user[0].firstName + " " +chat.user[0].lastName
                }
                subheader={"new message"}
            >

            </CardHeader>
        </Card>

    );
};

export default UserChatCard;
