import org.apache.commons.codec.binary.StringUtils;
import org.apache.commons.io.IOUtils;
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import org.junit.After;
import org.junit.Before;
import org.junit.Test;
import sun.net.www.http.HttpClient;

import java.io.IOException;
import java.io.InputStream;
import java.net.UnknownHostException;

import static org.hamcrest.CoreMatchers.equalTo;
import static org.hamcrest.MatcherAssert.assertThat;

public class ServletTest {

    private final CloseableHttpClient httpClient = HttpClients.createDefault();
    private final Servlet bits = new Servlet();

    @Before
    public void before() throws UnknownHostException, InterruptedException {
        bits.start();
        Thread.sleep(2000l);

    }

    @After
    public void after(){
        bits.stopRunning();
    }




    @Test
    public void canSeePending() throws IOException {
    HttpGet get = new HttpGet("http://localhost:4567/pending/bob");
        CloseableHttpResponse response = httpClient.execute(get);
        InputStream content = response.getEntity().getContent();
        String message = IOUtils.toString(content);

        assertThat(message, equalTo("hello"));

    }

    @Test
    public void canSeeAllHistory(){

    }
}
