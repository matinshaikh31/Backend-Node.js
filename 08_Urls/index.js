//URL  -- https://diwizon12.netlify.app?userID=12&a=2
// so basically UL in a humain friendly name of for website which point to a ip addres of that website

// https:   -- Protocol
//diwizon12.netlify.app  -- domain
//  "/" -- this is call path , so "/" is a root or home path       
// "?" everything after question mark is query parameters 
// & is use to pass another argument



const http = require("http");
const fs = require("fs");
const url = require("url");

const myServer = http.createServer((req , res)=>{

    if(req.url === '/favicon.ico') return res.end();


    const log = `${Date.now()} : ${req.url} : New Request Recieved \n`;
    const myUrl = url.parse(req.url , true);
    console.log(myUrl);

    fs.appendFile('log.txt' , log , (err , data)=>{

        switch(myUrl.pathname){
            case '/' : res.end("Home Page");
            break;

            case '/about' : 
            //query parameter
            const username = myUrl.query.myname ;
            console.log(username)
            res.end(`Hii,  ${username}`);
            break;

            case "/search":
                const search = myUrl.query.search_query;
                console.log(search)
                res.end("Here are your result for "+search);
                break;

            default:
                res.end("404 Not Found")

        }
        
        
    })


    // console.log(req.headers)
    // console.log(req)
    

});

const PORT = 8000;
myServer.listen(8000, ()=>{
    console.log(`Server started at port no ${PORT} `);
})

