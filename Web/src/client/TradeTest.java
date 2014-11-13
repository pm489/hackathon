package client;

import org.junit.Test;

import java.math.BigDecimal;

import static org.hamcrest.CoreMatchers.equalTo;
import static org.hamcrest.MatcherAssert.assertThat;

public class TradeTest {

    @Test
    public void canTGetJson(){

        Trade test = new Trade("Oracle","ORCL",7800, BigDecimal.valueOf(20.80),"Pending Peer Match");

        assertThat(test.toJson(), equalTo(
                "{name: 'Oracle', ticker: 'ORCL', boughtAt: 20.80, quantity: 7800, status: 'Pending Peer Match'}"
        ));
    }

}