import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.*;

public class Main {
    public static int[] arr, dp;
    public static void main(String[] args) throws IOException {
        // write your code here
        Scanner sc = new Scanner(System.in);

        int N = sc.nextInt();
        arr = new int[N];
        dp = new int[N];

        for(int i=0; i<N; i++){
            arr[i] = sc.nextInt();
            dp[i] = 1;
        }

        for(int i=0; i<N; i++){
            for(int j=0; j<i; j++){
                if(arr[i] > arr[j] && dp[i] < dp[j]+1){
                    dp[i] = dp[j]+1;
                }
            }
        }

        Arrays.sort(dp);
        System.out.println(dp[N-1]);
    }
}

