import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.lang.reflect.Array;
import java.util.*;

public class Main {
    public static int ans = 0;
    public static int N;
    public static int[] num = {1, 5, 10, 50};
    public static boolean[] check = new boolean[10000];

    public static void pick(int cnt, int idx, int sum){
        if(cnt == N){
            if(!check[sum]){
                check[sum] = true;
                ans++;
            }
            return;
        }
        for(int i=idx; i<4; i++){
            pick(cnt+1, i, sum+num[i]);
        }
    }
    public static void main(String[] args) throws IOException {
        // write your code here
        Scanner in = new Scanner(System.in);

        N = in.nextInt();
        pick(0, 0, 0);

        System.out.println(ans);
    }
}

