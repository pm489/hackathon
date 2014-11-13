import org.apache.commons.codec.binary.StringUtils;
import org.apache.commons.io.IOUtils;
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import org.junit.Before;
import org.junit.Test;
import sun.net.www.http.HttpClient;

import java.io.IOException;
import java.io.InputStream;
import java.net.UnknownHostException;

public class ServletTest {

    private final CloseableHttpClient httpClient = HttpClients.createDefault();

    @Before
    public void before() throws UnknownHostException, InterruptedException {
        Servlet bits = new Servlet();
        bits.start();
        Thread.sleep(2000l);

    }


    @Test
    public void canSeePending() throws IOException {
    HttpGet get = new HttpGet("http://localhost:4567/pending");
        CloseableHttpResponse response = httpClient.execute(get);
        InputStream content = response.getEntity().getContent();
        System.out.println(IOUtils.toString(content));

    }

    @Test
    public void canSeeAllHistory(){

    }
}
