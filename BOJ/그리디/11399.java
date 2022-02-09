import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.lang.reflect.Array;
import java.util.*;

public class Main {
    public static int[] atm;
    public static int N;
    public static void main(String[] args) throws IOException {
        // write your code here
        Scanner sc = new Scanner(System.in);

        N = sc.nextInt();
        atm = new int[N];

        for(int i=0; i<N; i++){
            atm[i] = sc.nextInt();
        }

        Arrays.sort(atm);

        int[] time = new int[N];
        time[0] = atm[0];
        int ans = time[0];

        for(int i=1; i<N; i++){
            time[i] = time[i-1] + atm[i];
            ans += time[i];
        }

        System.out.println(ans);
    }
}

