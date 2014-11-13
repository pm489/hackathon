package ledger;

import infrastructure.MicrotypeValue;

public final class Input extends MicrotypeValue<Address> {
    private Input(Address value) {
        super(value);
    }

    public static Input input(Address value) {
        return new Input(value);
    }
}
