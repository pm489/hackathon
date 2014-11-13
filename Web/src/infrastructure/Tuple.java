package infrastructure;

import static java.util.Objects.requireNonNull;

public final class Tuple<T, U> {
    private final T left;
    private final U right;

    private Tuple(T left, U right) {
        this.left = requireNonNull(left);
        this.right = requireNonNull(right);
    }

    public static <T, U> Tuple<T, U> tuple(T left, U right) {
        return new Tuple<T, U>(left, right);
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        Tuple tuple = (Tuple) o;

        if (!left.equals(tuple.left)) return false;
        if (!right.equals(tuple.right)) return false;

        return true;
    }

    @Override
    public int hashCode() {
        int result = left.hashCode();
        result = 31 * result + right.hashCode();
        return result;
    }

    @Override
    public String toString() {
        return "Tuple{" +
                "left=" + left +
                ", right=" + right +
                '}';
    }
}
