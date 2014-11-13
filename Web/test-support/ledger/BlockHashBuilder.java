package ledger;

import static ledger.BlockHash.blockHash;

public final class BlockHashBuilder {
    public static BlockHash aBlockHash() {
        return blockHash("12321");
    }
}
