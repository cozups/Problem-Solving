import java.util.*;

public class Main {
    public static int[][] adArray;
    public static boolean[] visited;
    public static int n, m, start, cnt;
    public static void main(String[] args) {
	// write your code here
        Scanner sc = new Scanner(System.in);

        n = sc.nextInt();
        m = sc.nextInt();
        start = 1; cnt = 0;

        adArray = new int[n+1][n+1];
        visited = new boolean[n+1];

        for(int i=1; i<=m; i++){
            int s = sc.nextInt();
            int e = sc.nextInt();

            adArray[s][e] = adArray[e][s] = 1;
        }

        dfs(start);
        System.out.println(cnt-1);
    }

    public static void dfs(int x){
        if(visited[x]) return;
        visited[x] = true;
        cnt++;
        for(int i=1; i<=n; i++){
            if(adArray[x][i] == 1){
                dfs(i);
            }
        }
    }
}
