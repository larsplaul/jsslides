 /*
 This is the Java REST-Service for the URL: api/demouser
*/
 @GET
 @Produces(MediaType.APPLICATION_JSON)
   public String getSomething(){
    return "{\"message\" : \"This message was delivered via a REST call accesible by only authenticated USERS\"}";
 }
