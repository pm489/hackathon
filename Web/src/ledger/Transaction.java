package ledger;

import java.util.Collection;

public final class Transaction {
    private final Collection<Input> inputs;
    private final Collection<Output> outputs;

    public Transaction(Collection<Input> inputs, Collection<Output> outputs) {
        this.inputs = inputs;
        this.outputs = outputs;
    }
}
