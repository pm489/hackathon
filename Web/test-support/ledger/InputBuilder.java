package ledger;

public final class InputBuilder {
    public static Input anInput() {
        return Input.input(AddressBuilder.anAddress());
    }
}
