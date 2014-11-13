package ledger;

import infrastructure.MicrotypeValue;

import java.util.ArrayList;
import java.util.Collection;
import java.util.List;

public final class Outputs extends MicrotypeValue<List<Output>> {
    private Outputs(Collection<Output> value) {
        super(new ArrayList<>(value));
    }

    public static Outputs outputs(Collection<Output> value) {
        return new Outputs(value);
    }

    public boolean includes(Address address) {
        return value.stream().anyMatch(o -> o.address().equals(address));
    }
}
