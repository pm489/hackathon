package ledger;

import infrastructure.MicrotypeValue;

import java.util.UUID;

public final class Address extends MicrotypeValue<UUID> {

    private Address(UUID value) {
        super(value);
    }

    public static Address address(UUID value) {
        return new Address(value);
    }
}
