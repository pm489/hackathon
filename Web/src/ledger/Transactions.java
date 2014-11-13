package ledger;

import client.Trades;
import infrastructure.MicrotypeValue;

import java.util.ArrayList;
import java.util.List;

public final class Transactions extends MicrotypeValue<List<Transaction>> {

    public Transactions(List<Transaction> transactions) {
        super(new ArrayList<>(transactions));
    }

    public Trades asTrades() {
        throw new UnsupportedOperationException("Mark didn't implement yet");
    }
}
