package ledger;

public final class Block {
    private final Iterable<Transaction> transactions;
    private final BlockHash previousBlockHash;

    public Block(Iterable<Transaction> transactions, BlockHash previousBlockHash) {
        this.transactions = transactions;
        this.previousBlockHash = previousBlockHash;
    }
}
