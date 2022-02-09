import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.lang.reflect.Array;
import java.util.*;

public class Main {
    public static int[] cash;
    public static void main(String[] args) throws IOException {
        // write your code here
        Scanner sc = new Scanner(System.in);

        int ans = 0;
        int N = sc.nextInt(); int K = sc.nextInt();
        cash = new int[N];
        for(int i=0; i<N; i++){
            cash[i] = sc.nextInt();
        }

        int idx = N-1;
        while(K > 0){
            if(cash[idx] <= K) {
                int coin = (K / cash[idx]);
                ans += coin;
                K -= (coin * cash[idx]);
            }
            if(idx - 1 >= 0){
                idx--;
            }
        }

        System.out.println(ans);
    }
}

