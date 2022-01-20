import java.util.Scanner;

public class Main {

    public static void main(String[] args) {
	// write your code here
        Scanner scanner = new Scanner(System.in);

        int n = scanner.nextInt();

        System.out.println(factorial(n));
    }

    static int factorial(int n) {
        if(n <= 1)
            return 1;

        return n * factorial(n-1);
    }
}
