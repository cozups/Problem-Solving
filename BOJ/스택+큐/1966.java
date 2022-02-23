import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.lang.reflect.Array;
import java.util.*;

public class Main {
    public static void main(String[] args) throws IOException {
        // write your code here
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

        int T = Integer.parseInt(br.readLine());
        while (T-- > 0) {
            StringTokenizer st = new StringTokenizer(br.readLine());
            int N = Integer.parseInt(st.nextToken());
            int K = Integer.parseInt(st.nextToken());

            st = new StringTokenizer(br.readLine());
            LinkedList<int[]> q = new LinkedList<int[]>();
            for (int i = 0; i < N; i++) {
                q.offer(new int[] {i, Integer.parseInt(st.nextToken())});
            }

            int cnt = 0;
            while (!q.isEmpty()) {
                boolean isMax = true;
                int[] front = q.poll();
                for (int i = 0; i < q.size(); i++) {
                    if (front[1] < q.get(i)[1]) {
                        isMax = false;
                        break;
                    }
                }
                if (isMax == false) {
                    q.offer(front);
                } else {
                    cnt++;
                    if (K == front[0]) {
                        System.out.println(cnt);
                    }
                }
            }

        }
    }
}

