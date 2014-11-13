import client.Jsonable;
import client.Trades;

import java.util.Optional;

public class UsersTrades implements Jsonable {

    MonadMap<String, Trades> mapOfUsersToPortfolio = new MonadMap<>();


    public String getPendingFor(String user) {
        Optional<Trades> tradesOptional = mapOfUsersToPortfolio.find(user);

        if (!tradesOptional.isPresent()) {
            mapOfUsersToPortfolio.put(user, new Trades());
        }

        return tradesOptional.get().toJson();

    }

    @Override
    public String toJson() {
        //

        return "";
    }
}


