package ledger;

import infrastructure.MicrotypeValue;

public final class BlockHash extends MicrotypeValue<String> {

    private BlockHash(String value) {
        super(value);
    }

    public static BlockHash blockHash(String value) {
        return new BlockHash(value);
    }
}
