import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.lang.reflect.Array;
import java.util.*;

public class Main {
    public static void main(String[] args) throws IOException {
        // write your code here
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringTokenizer st;

        int K = Integer.parseInt(br.readLine());
        int[] arr = new int[K];

        String temp = br.readLine();
        st = new StringTokenizer(temp);
        int minN = Integer.MAX_VALUE;
        int maxN = Integer.MIN_VALUE;
        for(int i=0; i<K; i++){
            arr[i] = Integer.parseInt(st.nextToken());
            minN = Math.min(minN, arr[i]);
            maxN = Math.max(maxN, arr[i]);
        }

        System.out.println(minN * maxN);
    }
}

