package ledger;

import java.util.Collection;

public final class Transaction {
    private final Input input;
    private final Collection<Output> outputs;

    public Transaction(Input input, Collection<Output> outputs) {
        this.input = input;
        this.outputs = outputs;
    }
}
