package ledger;

import client.Trades;

public final class Transactions {
    private final Iterable<Transaction> transactions;

    public Transactions(Iterable<Transaction> transactions) {
        this.transactions = transactions;
    }

    public Trades asTrades() {
        throw new UnsupportedOperationException("Mark didn't implement yet");
    }
}
