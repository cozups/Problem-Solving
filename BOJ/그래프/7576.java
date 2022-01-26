import java.util.*;

class tomato {
    int x;
    int y;

    tomato(int x, int y){
        this.x = x;
        this.y = y;
    }
}

public class Main {
    public static int n, m;
    public static int[][] map;
    public static int[] dx = {-1,1,0,0};
    public static int[] dy = {0,0,-1,1};
    public static Queue<tomato> q;
    public static void main(String[] args) {
        // write your code here
        Scanner sc = new Scanner(System.in);

        m = sc.nextInt();
        n = sc.nextInt();
        map = new int[n][m];
        q = new LinkedList<tomato>();

        for(int i=0; i<n; i++){
            for(int j=0; j<m; j++){
                map[i][j] = sc.nextInt();
                if(map[i][j] == 1){
                    q.add(new tomato(i,j));
                }
            }
        }
        System.out.println(bfs());
    }

    public static int bfs(){
        while(!q.isEmpty()){
            tomato t = q.poll();
            int nx = t.x;
            int ny = t.y;

            for(int i=0;i<4;i++){
                int nex = nx + dx[i];
                int ney = ny + dy[i];

                if(nex>=0 && ney>=0 && nex<n && ney<m){
                    if(map[nex][ney] == 0){
                        q.add(new tomato(nex, ney));
                        map[nex][ney] = map[nx][ny]+1;
                    }
                }
            }
        }

        int result = Integer.MIN_VALUE;
        for(int i=0; i<n; i++) {
            for (int j = 0; j < m; j++) {
                if(map[i][j] == 0){
                    return -1;
                }
                result = Math.max(result, map[i][j]);
            }
        }

        if(result == 1){
            return 0;
        }
        else return result-1;
    }
}

