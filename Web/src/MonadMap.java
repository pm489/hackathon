import java.util.Optional;
import java.util.concurrent.ConcurrentHashMap;

public  class MonadMap<T, U> extends ConcurrentHashMap<T, U> {
    public Optional<U> find(T key) {
        return Optional.ofNullable(super.get(key));
    }
}