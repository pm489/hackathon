
import java.net.Inet4Address;
import java.net.UnknownHostException;


import static spark.Spark.get;
import static spark.SparkBase.externalStaticFileLocation;

public class Servlet {

    public static void main(String[] args) throws UnknownHostException {
        System.out.println(Inet4Address.getLocalHost().getHostAddress());
        externalStaticFileLocation("E:\\dev\\GitHub\\hackathon\\Web\\www");

        get("/hello", (req, res) -> "Hello World");
    }

}
