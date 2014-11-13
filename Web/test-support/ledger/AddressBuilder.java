package ledger;

import java.util.UUID;

public final class AddressBuilder {
    public static Address anAddress() {
        return Address.address(UUID.randomUUID());
    }
}
