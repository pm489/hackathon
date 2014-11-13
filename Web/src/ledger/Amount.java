package ledger;

import infrastructure.MicrotypeValue;

import java.math.BigDecimal;

public final class Amount extends MicrotypeValue<BigDecimal> {
    private Amount(BigDecimal value) {
        super(value);
    }

    public static Amount amount(BigDecimal value) {
        return new Amount(value);
    }
}
