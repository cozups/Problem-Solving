import java.util.*;

public class Main {
    public static int N = 1, M = 1, cnt = 0;
    public static int[][] map;
    public static boolean[][] visited;
    public static int dx[] = {1, -1, 0, 0, 1, -1, 1, -1};      // 남 북 서 동 남동 북동 남서 북서
    public static int dy[] = {0, 0, -1, 1, 1, 1, -1, -1};
    public static Queue<int[]> q = new LinkedList<>();
    public static void main(String[] args) {
        // write your code here
        Scanner sc = new Scanner(System.in);

        while(true){
            M = sc.nextInt(); N = sc.nextInt();
            if(N == 0 && M == 0) break;
            map = new int[N][M];
            visited = new boolean[N][M];
            cnt = 0;

            // 입력
            for(int i=0; i<N; i++){
                for(int j=0; j<M; j++){
                    map[i][j] = sc.nextInt();
                }
            }

            for(int i=0; i<N; i++){
                for(int j=0; j<M; j++){
                    if(map[i][j] == 1 && visited[i][j] == false){
                        dfs(i, j);
                        cnt++;
                    }
                }
            }

            System.out.println(cnt);
        }
    }

    public static void dfs(int x, int y){
        visited[x][y] = true;

        for(int i=0; i<8; i++){
            int nx = x + dx[i];
            int ny = y + dy[i];

            if(nx>=0 && nx<N && ny>=0 && ny<M){
                if(map[nx][ny] == 1 && visited[nx][ny] == false){
                    dfs(nx, ny);
                }
            }

        }
    }
}

