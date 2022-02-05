import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.lang.reflect.Array;
import java.util.*;

public class Main {
    public static int[] days, cost;
    public static int[] dp;
    public static void main(String[] args) throws IOException {
        // write your code here
        Scanner sc = new Scanner(System.in);

        int N = sc.nextInt();
        days = new int[N]; cost = new int[N]; dp = new int[N+1];

        for(int i=0; i<N; i++){
            days[i] = sc.nextInt();
            cost[i] = sc.nextInt();
        }

        for(int i=0; i<N; i++){
            if(i + days[i] <= N){
                dp[i] += cost[i];
                int next= i + days[i];
                for(int j=next; j<=N; j++)
                    dp[j] = Math.max(dp[j], dp[i]);
            }
        }

        Arrays.sort(dp);
        System.out.println(dp[N]);
    }
}

