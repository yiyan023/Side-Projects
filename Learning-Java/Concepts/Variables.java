import java.util.Date;

public class Variables { 
    public static void main(String[] args) {
        
        int age = 30, temperature = 20; // only processes integers 
        // you can declare multiple variables on the same line
        byte age2 = 30; // more efficient
        double BMI = 20.1;
        char Name = 'A'; // not String
        boolean Yes = true;

        System.out.println(age);

        // reference types 
        Date now = new Date();
        System.out.println(now); // returns current date
    }
}