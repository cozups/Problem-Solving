import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.lang.reflect.Array;
import java.util.*;

public class Main {
    public static Queue<Integer> q = new LinkedList<Integer>();
    public static void main(String[] args) throws IOException {
        // write your code here
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

        int N = Integer.parseInt(br.readLine());

        for(int i=1; i<=N; i++){
            q.add(i);
        }

        while(q.size()>1){
            q.poll();
            int num = q.poll();
            q.offer(num);
        }
        int ans = q.poll();
        System.out.println(ans);
    }
}

