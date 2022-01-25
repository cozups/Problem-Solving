import java.util.*;

public class Main {
    public static int n, m, Num, cnt;
    public static int[][] map;
    public static boolean[][] visited;
    public static int[] dx = {-1,1,0,0};
    public static int[] dy = {0,0,-1,1};

    public static void main(String[] args) {
	// write your code here
        Scanner sc = new Scanner(System.in);
        int t = sc.nextInt();

        while(t > 0){
            n = sc.nextInt();
            m = sc.nextInt();
            Num = sc.nextInt();
            cnt = 0;
            map = new int[n][m];
            visited = new boolean[n][m];

            for(int i=0; i<Num; i++){
                int x = sc.nextInt();
                int y = sc.nextInt();
                map[x][y] = 1;
            }

            for(int i=0;i<n;i++){
                for(int j=0;j<m;j++){
                    if(map[i][j]==1 && !visited[i][j]){
                        dfs(i, j);
                        cnt++;
                    }
                }
            }
            System.out.println(cnt);
            t--;
        }
    }

    public static void dfs(int x, int y){
        visited[x][y] = true;

        for(int i=0; i<4; i++){
            int nx = x + dx[i];
            int ny = y + dy[i];

            if(nx>=0 && ny>=0 && nx<n && ny<m){
                if(map[nx][ny] == 1 && !visited[nx][ny]){
                    dfs(nx, ny);
                }
            }
        }
    }
}
