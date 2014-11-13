package client;

import argo.jdom.JsonRootNode;

import java.math.BigDecimal;

public class Trade implements Jsonable {

    public final String ticker;
    public final String name;
    public final Integer quanity;
    public final BigDecimal boughtAt;
    public final String status;

    public Trade(String ticker, String name, Integer quanity, BigDecimal boughtAt, String status) {

        this.ticker = ticker;
        this.name = name;
        this.quanity = quanity;
        this.boughtAt = boughtAt;
        this.status = status;
    }

    @Override
    public String toJson() {

        JsonRootNode rootNode;
        return null;
    }
}
