package ledger;

import org.junit.Test;

import static java.util.Arrays.asList;
import static ledger.AddressBuilder.anAddress;
import static ledger.AmountBuilder.anAmount;
import static ledger.InputBuilder.anInput;
import static ledger.Output.output;
import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.Matchers.equalTo;

public final class TransactionTest {
    @Test
    public void knowsWhatItHasOutputsFor() throws Exception {
        final Address anAddress = anAddress();
        assertThat(new Transaction(anInput(), asList(
                output(anAddress(), anAmount()),
                output(anAddress, anAmount())
        )).hasOutputFor(anAddress), equalTo(true));
    }

    @Test
    public void knowsWhatItHasNoOutputsFor() throws Exception {
        assertThat(new Transaction(anInput(), asList(
                output(anAddress(), anAmount()),
                output(anAddress(), anAmount())
        )).hasOutputFor(anAddress()), equalTo(false));
    }

}
