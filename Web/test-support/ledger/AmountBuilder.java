package ledger;

import static java.math.BigDecimal.ONE;

public final class AmountBuilder {
    static Amount anAmount() {
        return Amount.amount(ONE);
    }
}
