import java.util.*;

public class Main {
    public static int n, m;
    public static int[][] map;
    public static boolean[][] visited;
    public static int[] dx = {-1,1,0,0};
    public static int[] dy = {0,0,-1,1};

    public static void main(String[] args) {
        // write your code here
        Scanner sc = new Scanner(System.in);

        n = sc.nextInt();
        m = sc.nextInt();
        map = new int[n][m];
        visited = new boolean[n][m];

        for(int i=0; i<n; i++){
            String temp = sc.next();
            for(int j=0; j<m; j++){
                map[i][j] = temp.charAt(j) - '0';
            }
        }

        bfs(0,0);
        System.out.println(map[n-1][m-1]);
    }

    public static void bfs(int x, int y){
        Queue<int[]> q= new LinkedList<>();
        q.add(new int[] {x, y});
        visited[x][y] = true;

        while(!q.isEmpty()){
            int[] now = q.poll();
            int nx = now[0];
            int ny = now[1];

            for(int i=0;i<4;i++){
                int nex = nx + dx[i];
                int ney = ny + dy[i];

                if(nex>=0 && ney>=0 && nex<n && ney<m){
                    if(map[nex][ney] != 0 && !visited[nex][ney]){
                        q.add(new int[] {nex, ney});
                        visited[nex][ney] = true;
                        map[nex][ney] = map[nx][ny]+1;
                    }
                }
            }
        }

    }


}

