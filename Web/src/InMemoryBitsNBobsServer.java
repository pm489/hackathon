import client.Trades;
import ledger.*;

import java.util.LinkedList;
import java.util.List;
import java.util.UUID;
import java.util.concurrent.Executors;
import java.util.concurrent.ScheduledExecutorService;

import static java.util.concurrent.TimeUnit.SECONDS;

public final class InMemoryBitsNBobsServer implements BitsNBobsServer {

    private final ScheduledExecutorService executorService;
    private final Object lock = new Object();
    private BlockChain blockChain = new BlockChain();
    private List<Transaction> pendingTransactions = new LinkedList<>();

    public InMemoryBitsNBobsServer() {
        executorService = Executors.newSingleThreadScheduledExecutor();
        executorService.scheduleAtFixedRate(new Runnable() {
            @Override
            public void run() {
                synchronized (lock) {
                    blockChain = blockChain.addBlock(new Block(pendingTransactions, BlockHash.blockHash(UUID.randomUUID().toString())));
                    pendingTransactions = new LinkedList<>();
                }
            }
        }, 30, 30, SECONDS);
    }

    @Override
    public Trades get(Address address) {
        synchronized (lock) {
            return blockChain.transactionsFor(address).asTrades();
        }
    }

    @Override
    public void submit(Transaction transaction) throws InsufficientFundsException {
        synchronized (lock) {
            pendingTransactions.add(transaction);
        }
    }
}
