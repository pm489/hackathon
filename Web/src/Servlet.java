
    import java.net.Inet4Address;
import java.net.UnknownHostException;


import static spark.Spark.get;
import static spark.SparkBase.externalStaticFileLocation;

public class Servlet {

    public static void main(String[] args) throws UnknownHostException {
        start();
    }

    public static void start() throws UnknownHostException {
        System.out.println(Inet4Address.getLocalHost().getHostAddress());
        externalStaticFileLocation("/home/phil/Documents/projects/hackathon/Web/www");

        get("/hello", (req, res) -> "Hello World");
        get("/pending", (req,res)-> "hello world");
    }


}
