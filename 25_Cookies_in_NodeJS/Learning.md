# Cookies in NodeJS

Server make the token.

Server can the send the token to the user through `Cookies` and `Response`.

## Using Browser - auto

Browser stores the cookies.

whenever user send a request to the server the cookie is also attached with that request nd sent to the server

We can use the cookie to validate the user.

The server makes the cookies for the domain to which those cookies belong.(Cookies are domain specific.)

it means if you send a req to a google it send you 2 cookies and you send req to FB it send you 2 cookie now your browser has 4 cooikies now when ever you send req to FB then only The Cookie created by Fb will go to FB server it means "Cookies Are Domain Specfic"

We can specify domain to the cookie.Which domain can acess that cookie.

We can also specify the expiration of the cookie.

```javascript 
res.cookie("uid", token , {
    domain : "ayushk.dev" // ayushk.dev can access 

    domain : ".ayushk.dev" // blog.ayushk.dev can access 
    //app.ayushk.dev also can access
    
})
```

It is only limited to the browser.

We cannot use cookie in mobile app

## Using Header - json,Response

in this we sent the token to client and can store that token in client local storage

Bearer authentication is also called as token authentication. 
It is an `HTTP auth`.

```javascript
 Header{
    Authorization : Bearer <token>
 }

```

Server reads the header and removes the bearer and takes the token to validate the user.

