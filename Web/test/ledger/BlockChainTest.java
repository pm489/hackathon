package ledger;

import org.junit.Test;

import static java.util.Arrays.asList;
import static ledger.AddressBuilder.anAddress;
import static ledger.BlockHashBuilder.aBlockHash;
import static ledger.Input.input;
import static ledger.OutputsBuilder.anOutputs;
import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.Matchers.equalTo;

public final class BlockChainTest {
    @Test
    public void canGetTransactionsForAddress() throws Exception {
        final Address address = anAddress();
        final Transaction transaction = new Transaction(input(address), anOutputs());
        assertThat(new BlockChain().addBlock(new Block(asList(transaction), aBlockHash())).transactionsFor(address), equalTo(new Transactions(asList(transaction))));
    }

}
