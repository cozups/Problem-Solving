import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.lang.reflect.Array;
import java.util.*;

public class Main {
    public static int[][] dp = new int[30][30];
    public static void main(String[] args) throws IOException {
        // write your code here
        Scanner sc = new Scanner(System.in);

        for(int i=0; i<30; i++){
            dp[i][i] = 1;
            dp[i][0] = 1;
        }

        for(int i=2; i<30; i++){
            for(int j=1; j<30; j++){
                dp[i][j] = dp[i-1][j-1] + dp[i-1][j];
            }
        }

        int T = sc.nextInt();
        while(T>0){
            int W = sc.nextInt();
            int E = sc.nextInt();

            System.out.println(dp[E][W]);
            T--;
        }
    }
}

