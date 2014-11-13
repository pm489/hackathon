import ledger.Address;
import ledger.BlockChain;
import ledger.Transaction;

public final class InMemoryBitsNBobsServer implements BitsNBobsServer {

    private final BlockChain blockChain = new BlockChain();

    @Override
    public Trades get(Address address) {
        throw new UnsupportedOperationException("Mark didn't implement yet");
    }

    @Override
    public void submit(Transaction transaction) throws InsufficientFundsException {

    }
}
