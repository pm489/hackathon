package infrastructure;

public abstract class MicrotypeValue<T> {
    final T value;

    protected MicrotypeValue(final T value) {
        if (value == null) {
            throw new NullPointerException("value cannot be null");
        }
        this.value = value;
    }

    @Override
    public boolean equals(final Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        MicrotypeValue that = (MicrotypeValue) o;
        return value.equals(that.value);
    }

    @Override
    public int hashCode() {
        return value.hashCode();
    }

    @Override
    public String toString() {
        return getClass().getSimpleName() + "{value='" + value + "'}";
    }

}
