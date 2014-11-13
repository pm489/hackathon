
    import spark.Request;
    import spark.Response;
    import spark.Route;

    import java.net.Inet4Address;
import java.net.UnknownHostException;
    import java.util.List;
    import java.util.Map;
    import java.util.Optional;


    import static spark.Spark.get;
import static spark.SparkBase.externalStaticFileLocation;
    import static spark.SparkBase.stop;

    public class Servlet {

    public static void main(String[] args) throws UnknownHostException {
        start();
    }

    public static void start() throws UnknownHostException {
        System.out.println(Inet4Address.getLocalHost().getHostAddress());
        externalStaticFileLocation("/home/phil/Documents/projects/hackathon/Web/www");

        get("/hello", (req, res) -> "Hello World");
        get("/pending/:name", new Pending());
    }

    public void stopRunning() {
            stop();
    }
}

    class Pending implements Route {


        private UsersTrades tradeList;

        @Override
        public Object handle(Request request, Response response) {
            Optional<String> params = Optional.ofNullable(request.params(":name"));
            response.type("text");

            if(!params.isPresent()){
                return "Please specify a user Key";
            }else{
                return tradeList.getPendingFor(params.get());
            }
        }
    }
