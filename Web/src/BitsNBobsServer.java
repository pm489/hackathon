import client.Trades;
import ledger.Address;
import ledger.Transaction;

public interface BitsNBobsServer {
    public Trades get(Address address);

    public void submit(Transaction transaction) throws InsufficientFundsException;
}
