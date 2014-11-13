package ledger;

import java.util.Collection;
import java.util.List;

import static java.util.stream.Collectors.toList;

public final class Block {
    private final List<Transaction> transactions;
    private final BlockHash previousBlockHash;

    public Block(List<Transaction> transactions, BlockHash previousBlockHash) {
        this.transactions = transactions;
        this.previousBlockHash = previousBlockHash;
    }

    public Collection<Transaction> transactionsFor(Address address) {
        return transactions.stream()
                .filter(transaction -> transaction.input().address().equals(address) || transaction.hasOutputFor(address))
                .collect(toList());
    }
}
