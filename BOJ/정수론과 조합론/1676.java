import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.lang.reflect.Array;
import java.util.*;

public class Main {
    public static void main(String[] args) throws IOException {
        // write your code here
        Scanner in = new Scanner(System.in);

        int N = in.nextInt();

        int cnt = 0;
        while(N>=5){
            cnt += N / 5;
            N /= 5;
        }
        System.out.println(cnt);
    }
}

