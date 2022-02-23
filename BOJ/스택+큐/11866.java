import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.lang.reflect.Array;
import java.util.*;

public class Main {
    public static LinkedList<Integer> q = new LinkedList<Integer>();
    public static void main(String[] args) throws IOException {
        // write your code here
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringTokenizer st = new StringTokenizer(br.readLine());

        int N = Integer.parseInt(st.nextToken());
        int K = Integer.parseInt(st.nextToken());

        for(int i=1; i<=N; i++){
            q.add(i);
        }

        System.out.print("<");
        while(q.size()>1){
            for(int i=0; i<K-1; i++){
                q.offer(q.poll());
            }
            System.out.print(q.poll() + ", ");
        }
        System.out.print(q.poll()+">");
    }
}

