import java.util.*;

public class Main {
    public static int N;
    public static int[][] map;
    public static boolean[][] visited;
    public static int[][] transMap;
    public static int[] dx = {0, 0, 1, -1};
    public static int[] dy = {1, -1, 0, 0};
    public static void main(String[] args) {
        // write your code here
        Scanner sc = new Scanner(System.in);

        N = sc.nextInt();
        map = new int[N][N];
        int Max = 1, maxHeight = 1;
        int cnt = 0;

        for(int i=0; i<N; i++){
            for(int j=0; j<N; j++){
                map[i][j] = sc.nextInt();
                maxHeight = Math.max(maxHeight, map[i][j]);
            }
        }

        for(int h=1; h<=maxHeight; h++){
            cnt = 0;
            transMap = new int[N][N];
            visited = new boolean[N][N];
            for(int i=0; i<N; i++){
                for(int j=0; j<N; j++){
                    if(map[i][j] > h){
                        transMap[i][j] = 1;
                    }
                }
            }

            for(int i=0; i<N; i++){
                for(int j=0; j<N; j++){
                    if(transMap[i][j] == 1 && visited[i][j] == false){
                        dfs(i, j);
                        cnt++;
                    }
                }
            }

            Max = Math.max(Max, cnt);
        }

        System.out.println(Max);
    }

    public static void dfs(int x, int y){
        visited[x][y] = true;

        for(int i=0; i<4; i++){
            int nx = x + dx[i];
            int ny = y + dy[i];

            if(nx>=0 && nx<N && ny>=0 && ny<N){
                if(transMap[nx][ny] == 1 && visited[nx][ny] == false){
                    dfs(nx, ny);
                }
            }

        }
    }
}

