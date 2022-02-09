import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.lang.reflect.Array;
import java.util.*;

public class Main {
    public static int[][] meet;
    public static int N;
    public static void main(String[] args) throws IOException {
        // write your code here
        Scanner sc = new Scanner(System.in);

        N = sc.nextInt();
        meet = new int[N][2];
        for(int i=0; i<N; i++){
            meet[i][0] = sc.nextInt();
            meet[i][1] = sc.nextInt();
        }

        Arrays.sort(meet, new Comparator<int[]>() {
            @Override
            public int compare(int[] o1, int[] o2) {
                if(o1[1] == o2[1])  // 종료시간이 같을 경우, 시작 시간을 기준으로 오름차순
                    return o1[0] - o2[0];
                return o1[1] - o2[1];   // 종료시간을 기준으로 오름차순
            }
        });

        int ans = 0; int now = 0;
        for(int i = 0; i < N; i++){
            if(now <= meet[i][0]) {
                ans++;
                now = meet[i][1];
            }
        }

        System.out.println(ans);
    }
}

