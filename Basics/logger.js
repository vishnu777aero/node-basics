const myHeart = () => {
    return 'This is my heart ❤';
}

module.exports.myHeart = myHeart;
/********************************
 * //Alternatively,
 * 
 * exports.myHeart = myHeart;
 * 
 ********************************/

/********************************
 * //If only single export is used then 
 * 
 * module.exports  = myHeart;
 * 
 * //Don't write
 * 
 * exports = myHeart;
 ********************************/