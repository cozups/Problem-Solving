import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.lang.reflect.Array;
import java.util.*;

public class Main {
    public static void main(String[] args) throws IOException {
        // write your code here
        Scanner in = new Scanner(System.in);

        int T = in.nextInt();

        while(T>0){
            int K = in.nextInt(); int N = in.nextInt();
            long fac1 = 1; long fac2 = 1;
            K = Math.min(K, N-K);

            for(int i=1; i<=K; i++, N--){
                fac1 *= N;
                fac2 *= i;
            }

            System.out.println(fac1 / fac2);
            T--;
        }
    }
}

