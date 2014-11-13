package ledger;

import infrastructure.MicrotypeValue;
import infrastructure.Tuple;

import static infrastructure.Tuple.tuple;

public final class Output extends MicrotypeValue<Tuple<Address, Amount>> {
    private Output(Tuple<Address, Amount> value) {
        super(value);
    }

    public static Output output(Address address, Amount amount) {
        return new Output(tuple(address, amount));
    }

    public Address address() {
        return value.left;
    }

}
