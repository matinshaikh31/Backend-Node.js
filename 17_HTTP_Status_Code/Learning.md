# Status Code

Http status code represent wheather a http request has benn sucesssfuly comeplete or not

404 - Not Found

1. Infromational responses ( 100-199 )
2. Successful responses ( 200-299 )

   - 201 - Created - When we created something using post or put request at that time we send this code
   - 202 - Accepted
   - 203 - Non-Authoritative Infromation
   - 204 - Not Contnet
   - 205 - Reset Content

3. Redirection messages ( 300-399 )
4. Client error responses ( 400-499 )
   - 400 - Bad Request - it means when user filll information but put some filend empty at that time req is    rejected and send this code e.g required field
   - 401 - Unauthorized
   - 402 - Payment Required
   - 403 - Forbidden
   - 404 - Not Found
5. Server error responses ( 500-599 )
   - 500 - Internal Server Error
   - 501 - Not Implemented
   - 502 - Bad Gateway
   - 503 - Service Unavailable
