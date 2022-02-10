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
        long[] oil = new long[N];
        long[] dist = new long[N-1];
        long ans = 0;

        for(int i=0; i<N-1; i++){
            dist[i] = sc.nextInt();
        }
        for(int i=0; i<N; i++){
            oil[i] = sc.nextInt();
        }

        ans = oil[0] * dist[0]; long prev = oil[0];
        for(int i=1; i<N-1; i++){
            if(prev > oil[i]){
                ans += oil[i] * dist[i];
                prev = oil[i];
            }
            else ans += prev * dist[i];
        }

        System.out.println(ans);
    }
}

