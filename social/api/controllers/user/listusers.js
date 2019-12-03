module.exports = async function(req, res) {
    console.log("Listing all users...")
    
    // Fetch all users using Waterline
    // User is a promis object
    const users = await User.find({})
    res.send(users)
}
