import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.*;

public class Main {
    public static int[][][] dp = new int[51][51][51];
    public static void main(String[] args) throws IOException {
        // write your code here
        Scanner sc = new Scanner(System.in);

        while(true) {
            int a = sc.nextInt();
            int b = sc.nextInt();
            int c = sc.nextInt();

            if(a == -1 && b == -1 && c == -1) break;

            System.out.printf("w(%d, %d, %d) = %d\n", a, b, c, w(a, b, c));
        }
    }

    public static int w(int a, int b, int c){
        if(a <= 0 || b <= 0 || c <= 0)
            return 1;

        if(a > 20 || b > 20 || c > 20)
            return w(20, 20, 20);

        // 이미 계산했다면
        if(dp[a][b][c] != 0){
            return dp[a][b][c];
        }

        if(a < b && b < c){
            dp[a][b][c] = w(a, b, c-1) + w(a, b-1, c-1) - w(a, b-1, c);
            return dp[a][b][c];
        }

        dp[a][b][c] = w(a-1, b, c) + w(a-1, b-1, c) + w(a-1, b, c-1) - w(a-1, b-1, c-1);
        return dp[a][b][c];
    }
}

