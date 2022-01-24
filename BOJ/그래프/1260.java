import java.util.*;

public class Main {
    public static int[][] adArray;
    public static boolean[] visited;
    public static int n, m, start;
    public static void main(String[] args) {
	// write your code here
        Scanner sc = new Scanner(System.in);

        n = sc.nextInt();
        m = sc.nextInt();
        start = sc.nextInt();

        adArray = new int[n+1][n+1];
        visited = new boolean[n+1];

        for(int i=1; i<=m; i++){
            int s = sc.nextInt();
            int e = sc.nextInt();
            adArray[s][e] = 1;
            adArray[e][s] = 1;
        }

        dfs(start);
        System.out.println();

        for(int i=1; i<=n; i++){
            visited[i] = false;
        }

        bfs();
    }

    public static void dfs(int x){
        if(visited[x]) return;
        visited[x] = true;
        System.out.print(x + " ");
        for(int i=1; i<=n; i++){
            if(adArray[x][i] == 1){
                dfs(i);
            }
        }
    }

    public static void bfs(){
        Queue<Integer> q = new LinkedList<>();
        q.offer(start);
        visited[start] = true;
        System.out.print(start + " ");

        while(!q.isEmpty()){
            int temp = q.poll();

            for(int i=0; i<=n; i++){
                if(adArray[temp][i] == 1 && !visited[i]){
                    q.offer(i);
                    visited[i] = true;
                    System.out.print(i + " ");
                }
            }
        }
    }
}
