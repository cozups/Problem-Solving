import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.lang.reflect.Array;
import java.util.*;

public class Main {
    public static void main(String[] args) throws IOException {
        // write your code here
        Scanner sc = new Scanner(System.in);

        int N = sc.nextInt();
        int[] rope = new int[N];

        for(int i=0; i<N; i++){
            rope[i] = sc.nextInt();
        }

        Arrays.sort(rope);

        int ans = rope[N-1];
        int temp = Integer.MAX_VALUE; int cnt = 0;
        for(int i=N-1; i>=0; i--){
            temp = Math.min(temp, rope[i]);
            cnt++;
            ans = Math.max(ans, temp * cnt);
        }

        System.out.println(ans);
    }
}

