package ledger;

import java.util.HashMap;
import java.util.Map;
import java.util.UUID;

import static java.util.stream.Collectors.toList;

public final class BlockChain {
    private final Map<BlockHash, Block> chain;

    public BlockChain() {
        this(new HashMap<>());
    }

    private BlockChain(Map<BlockHash, Block> chain) {
        this.chain = chain;
    }


    public BlockChain addBlock(Block block) {
        return new BlockChain(new HashMap<BlockHash, Block>() {{
            for (Entry<BlockHash, Block> blockHashBlockEntry : chain.entrySet()) {
                put(blockHashBlockEntry.getKey(), blockHashBlockEntry.getValue());
            }
            put(BlockHash.blockHash(UUID.randomUUID().toString()), block);
        }});
    }

    public Transactions transactionsFor(Address address) {
        return new Transactions(chain.values().stream().flatMap(block -> block.transactionsFor(address).stream()).collect(toList()));
    }
}
