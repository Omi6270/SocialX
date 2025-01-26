// export const isLikedByReqUser = (reqUserId, post) =>{
//     for(let user of post.liked){
//         if(reqUserId === user.id){
//             return true;
//         }
//     }
//     return false;
// }
export const isLikedByReqUser = (reqUserId, post) => {
    // Check if post or post.liked is undefined or not an array
    if (!post || !Array.isArray(post.liked)) {
        console.error('Invalid post or liked data:', post);
        return false;
    }

    // Iterate over the liked array
    for (let user of post.liked) {
        if (reqUserId === user.id) {
            return true;
        }
    }
    return false;
};
