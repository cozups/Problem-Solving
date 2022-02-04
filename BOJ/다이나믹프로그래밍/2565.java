import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.lang.reflect.Array;
import java.util.*;

public class Main {
    public static int[] seq, dp;
    public static void main(String[] args) throws IOException {
        // write your code here
        Scanner sc = new Scanner(System.in);

        int N = sc.nextInt();
        int mNum = -1;
        seq = new int[501]; dp = new int[501];
        Arrays.fill(dp, 1);

        for(int i=1; i<=N; i++){
            int idx = sc.nextInt();
            seq[idx] = sc.nextInt();
            mNum = Math.max(mNum, seq[idx]);
        }

        for(int i=1; i<=mNum; i++){
            for(int j=1; j<i; j++){
                if(seq[j] != 0 && seq[i] > seq[j]){
                    dp[i] = Math.max(dp[i], dp[j]+1);
                }
            }
        }

        Arrays.sort(dp);
        System.out.println(N-dp[500]);
    }
}

