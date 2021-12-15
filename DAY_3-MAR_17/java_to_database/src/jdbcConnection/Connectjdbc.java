package jdbcConnection;

import java.sql.Connection;
import java.sql.DriverManager;

public class Connectjdbc {
    public static void main(String args[]) {

        Connection connection = null;

        try {
            Class.forName("org.postgresql.Driver");
            connection = DriverManager.getConnection("jdbc:postgresql://localhost:5432/practices","postgres","tarun");

            if (connection != null) {
                System.out.println("Connected");
            }
            else {
                System.out.println("not connected");
            }
        } catch (Exception e) {

        }
    }
}
