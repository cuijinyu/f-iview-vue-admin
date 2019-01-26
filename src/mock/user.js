import Mock from 'mockjs'
// login
Mock.mock("/login", "post", options => {
    console.log(JSON.parse(options.body));
    return {
        success:true,
        data: {
            isadmin:true,
            username:"user",
            description:"123"
        }
    }
})

// logout
Mock.mock("/user/logout", "post", options => {
    return {
        success:true
    }
})
export default Mock;