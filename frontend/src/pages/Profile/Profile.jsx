import { Avatar, Box, Button, Card, Grid2, Tab, Tabs, Grid } from '@mui/material';
import React from 'react';
import { useParams } from 'react-router-dom';
import PostCard from '../../components/Post/PostCard';
import UserReelCard from '../../components/Reels/UserReelCard';
import { useSelector } from 'react-redux';
import ProfileModal from './ProfileModal';

const tabs = [
    { value: "post", name: "Post" },
    { value: "reels", name: "Reels" },
    { value: "saved", name: "Saved" },
    { value: "repost", name: "Repost" },
]
const posts = [1, 1, 1, 1];
const reels = [1, 1, 1, 1];
const savedPost = [1, 1, 1];

// const Profile = () => {
//     const {auth} = useSelector(store => store);
//     const { id } = useParams();
//     const [open, setOpen] = React.useState(false);
//     const handleOpenProfileModal = () => setOpen(true);
//     const handleClose = () => setOpen(false);
//     const [value, setValue] = React.useState('post');

//     const handleChange = (event, newValue) => {
//         setValue(newValue);
//     };
//     return (
//         <Card className='my-10 w-[70%]'>
//             <div className='rounded-md'>
//                 <div className='h-[15rem]'>
//                     <img className='w-full h-full rounded-t-md' src="https://cdn.pixabay.com/photo/2022/10/07/11/02/autumn-7504817_640.jpg" alt="" />
//                 </div>
//                 <div className='px-5 flex justify-between items-start mt-5 h-[5rem]'>
//                     <Avatar className='' sx={{ width: "5rem", height: "5rem" }} src="" />
//                     {true ? (<Button 
//                     sx={{ borderRadius: "20px" }} 
//                     variant='outlined'
//                     onClick={handleOpenProfileModal}
//                     >Edit Profile</Button>) 
//                     : (<Button 
//                     sx={{ borderRadius: "20px" }} 
//                     variant='outlined'
//                     >Follow</Button>)}

//                 </div>
//                 <div className='p-5'>
//                     <div>
//                         <h1 className='py-1 font-bold text-xl'>{auth.user?.firstName + " " + auth.user?.lastName}</h1>
//                         <p>@{auth.user?.firstName.toLowerCase() + "_" + auth.user?.lastName.toLowerCase()}</p>
//                     </div>
//                     <div className='flex gap-5 items-center py-3'>
//                         <span>41 posts</span>
//                         <span>35 followers</span>
//                         <span>5 following</span>
//                     </div>
//                     <div>
//                         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore magni i</p>
//                     </div>
//                 </div>
//                 <section>
//                     <Box sx={{ width: '100%', borderBottom: 1, borderColor: "divider" }}>
//                         <Tabs
//                             value={value}
//                             onChange={handleChange}
//                             aria-label="wrapped label tabs example"
//                         >
//                             {tabs.map((item) => <Tab value={item.value} label={item.name} wrapped />)}
//                         </Tabs>
//                     </Box>
//                     <div className='flex justify-center'>
//                         {value === "post" ? (<div className='space-y-5 w-[70%] my-10'>
//                             {posts.map((item) => <div className='border border-slate-100 rounded-md'> <PostCard /> </div>)}
//                         </div>) :value === "reels" ? (<div className='flex justify-center flex-wrap gap-2 my-10 '>
//                             {reels.map((item) => <UserReelCard/>)}
//                         </div>) :value === "saved" ? (<div className='space-y-5 w-[70%] my-10'>
//                             {posts.map((item) => <div className='border border-slate-100 rounded-md'> <PostCard /> </div>)}
//                         </div>): (<div>Repost</div>)}


//                     </div>
//                 </section>

//             </div>
//             <section>
//                 <ProfileModal open={open} handleClose={handleClose}/>
//             </section>

//         </Card>
//     );
// };

// export default Profile;

const Profile = () => {
    const { auth } = useSelector(store => store);
    const { id } = useParams();
    const [open, setOpen] = React.useState(false);
    const [value, setValue] = React.useState('post');

    const handleOpenProfileModal = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    if (!auth || !auth.user) {
        return <div>Loading...++</div>; // Add a spinner or loading indicator
    }

    // if (id !== String(auth.user.id)) {
    //     console.log("URL param id:", id);
    //     console.log("Redux user id:", auth.user.id);

    //     return <div>Profile not found</div>;
    // }

    return (
        <Grid
            container
            style={{ minHeight: '100vh' }} // Full-height container
            justifyContent="center" // Center horizontally
            alignItems="center" // Center vertically
        >
            <Grid item xs={12} sm={8} md={6} lg={4}>
                <Card className="my-10 w-[100%] mx-auto p-4 shadow-lg">
                    <div className='rounded-md'>
                        {/* Cover Image and Profile Details */}
                        <div className='h-[15rem]'>
                            <img
                                className='w-full h-full rounded-t-md'
                                src="https://cdn.pixabay.com/photo/2022/10/07/11/02/autumn-7504817_640.jpg"
                                alt=""
                            />
                        </div>
                        <div className='px-5 flex justify-between items-start mt-5 h-[5rem]'>
                            <Avatar sx={{ width: "5rem", height: "5rem" }} src="" />
                            <Button
                                sx={{ borderRadius: "20px" }}
                                variant='outlined'
                                onClick={handleOpenProfileModal}
                            >
                                Edit Profile
                            </Button>
                        </div>
                        {/* User Information */}
                        <div className='p-5'>
                            <div>
                                <h1 className='py-1 font-bold text-xl'>
                                    {auth.user.firstName + " " + auth.user.lastName}
                                </h1>
                                <p>@{auth.user.firstName.toLowerCase()}_{auth.user.lastName.toLowerCase()}</p>
                            </div>
                            <div className='flex gap-5 items-center py-3'>
                                <span>41 posts</span>
                                <span>35 followers</span>
                                <span>5 following</span>
                            </div>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        </div>
                        {/* Tabs and Conditional Rendering */}
                        <Box sx={{ width: '100%', borderBottom: 1, borderColor: "divider" }}>
                            <Tabs value={value} onChange={handleChange}>
                                {tabs.map((item) => (
                                    <Tab key={item.value} value={item.value} label={item.name} wrapped />
                                ))}
                            </Tabs>
                        </Box>
                        <div className='flex justify-center'>
                            {value === "post" && (
                                <div className='space-y-5 w-[70%] my-10'>
                                    {posts.map((item, index) => (
                                        <div key={index} className='border border-slate-100 rounded-md'>
                                            <PostCard item={item} />
                                        </div>
                                    ))}
                                </div>
                            )}
                            {value === "reels" && (
                                <div className='flex justify-center flex-wrap gap-2 my-10'>
                                    {reels.map((item, index) => <UserReelCard key={index} />)}
                                </div>
                            )}
                            {value === "saved" && (
                                <div className='space-y-5 w-[70%] my-10'>
                                    {savedPost.map((item, index) => (
                                        <div key={index} className='border border-slate-100 rounded-md'>
                                            <PostCard />
                                        </div>
                                    ))}
                                </div>
                            )}
                            {value === "repost" && <div>Repost</div>}
                        </div>
                    </div>
                    <ProfileModal open={open} handleClose={handleClose} />
                </Card>
            </Grid>
        </Grid>
    );
};

export default Profile;
