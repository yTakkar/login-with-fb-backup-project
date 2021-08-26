FB.login(function(response) {
    if (response.authResponse) {
        testAPI()
    } else {
        console.log('not authorized!!')
    }
}, { scope: 'email,user_birthday,user_posts' })

function testAPI() {
    FB.api('/me?fields=name,email,birthday,posts', function(response) {
        console.log(response);
    });
}

function logout() {
    FB.logout(function(resp) {
        console.log('Logout!!')
    })
}