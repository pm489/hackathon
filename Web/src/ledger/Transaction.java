package ledger;

import infrastructure.MicrotypeValue;
import infrastructure.Tuple;

import java.util.Collection;

import static infrastructure.Tuple.tuple;
import static ledger.Outputs.outputs;

public final class Transaction extends MicrotypeValue<Tuple<Input, Outputs>> {
    public Transaction(Input input, Collection<Output> outputs) {
        super(tuple(input, outputs(outputs)));
    }

    public boolean hasOutputFor(Address address) {
        return value.right.includes(address);
    }

    public Input input() {
        return value.left;
    }
}