// Task -2:
// Find the friend with the smallest name.
// const heights2 = ['rahim', 'robin', 'rafi', 'ron', 'rashed'];



const heights2 = ['rahim', 'robin', 'rafi', 'ron', 'rashed'];
let singFriend = heights2[0];

for (friend of heights2){
    if (friend.length < singFriend.length){
        singFriend = friend;
    }
}console.log(singFriend);
