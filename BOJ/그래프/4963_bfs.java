import java.util.*;

public class Main {
    public static int N = 1, M = 1, cnt = 0;
    public static int[][] map;
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
            cnt = 0;

            // 입력
            for(int i=0; i<N; i++){
                for(int j=0; j<M; j++){
                    map[i][j] = sc.nextInt();
                }
            }

            for(int i=0; i<N; i++){
                for(int j=0; j<M; j++){
                    if(map[i][j] == 1){
                        q.add(new int[] {i, j});
                        bfs();
                    }
                }
            }

            System.out.println(cnt);
        }
    }

    public static void bfs(){
        while(!q.isEmpty()){
            int[] now = q.poll();
            int nx = now[0];
            int ny = now[1];

            for(int i=0; i<8; i++){
                int nex = nx + dx[i];
                int ney = ny + dy[i];

                if(nex>=0 && nex<N && ney>=0 && ney<M){
                    if(map[nex][ney] == 1) {
                        q.add(new int[] {nex, ney});
                        map[nex][ney] = map[nx][ny] + 1;
                    }
                }
            }
        }
        cnt++;
    }
}

