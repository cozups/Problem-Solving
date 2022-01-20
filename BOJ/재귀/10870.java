import java.util.Scanner;

public class Main {

    public static void main(String[] args) {
	// write your code here
        Scanner scanner = new Scanner(System.in);

        int n = scanner.nextInt();

        System.out.println(fibo(n));
    }

    static int fibo(int n) {
        if(n==1)
            return 1;
        else if(n==0)
            return 0;
        return fibo(n-1) + fibo(n-2);
    }
}