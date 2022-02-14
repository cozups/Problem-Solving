import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.lang.reflect.Array;
import java.util.*;

public class Main {
    public static void main(String[] args) throws IOException {
        // write your code here
        Scanner in = new Scanner(System.in);

        int N = in.nextInt(); int K = in.nextInt();

        int fac1 = 1, fac2 = 1;
        for(int i=1; i<=K; i++, N--){
            fac1 *= N;
        }
        for(int i=1; i<=K; i++){
            fac2 *= i;
        }

        System.out.println(fac1 / fac2);
    }
}

