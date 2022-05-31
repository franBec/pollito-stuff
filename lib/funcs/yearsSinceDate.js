const yearsSinceDate = (dateString) =>{
    var ageInMilliseconds = new Date() - new Date(dateString);
    return Math.floor(ageInMilliseconds/1000/60/60/24/365)
}

export default yearsSinceDate