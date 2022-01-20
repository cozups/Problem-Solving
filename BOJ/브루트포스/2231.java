import java.util.Scanner;

public class Main {

    public static void main(String[] args) {
	// write your code here
        Scanner scanner = new Scanner(System.in);

        int n = scanner.nextInt();
        int ans = 0;

        for (int i=1; i<=n; i++){
            int temp = i;
            int k = i;
            while (k > 0){
                temp += k%10;
                k /= 10;
            }

            if(temp == n){
                ans = i;
                break;
            }
        }

        System.out.println(ans);
    }
}