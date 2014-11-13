package ledger;

import java.util.HashMap;

public final class BlockChain {
    private final HashMap<BlockHash, Block> chain;

    public BlockChain(HashMap<BlockHash, Block> chain) {
        this.chain = chain;
    }
}
