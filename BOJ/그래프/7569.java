import java.util.*;

class tomato {
    int h;
    int x;
    int y;

    tomato(int h, int x, int y){
        this.h = h;
        this.x = x;
        this.y = y;
    }
}

public class Main {
    public static int n, m, h;
    public static int[][][] map;
    public static int[] dx = {0,0,-1,1,0,0};
    public static int[] dy = {0,0,0,0,-1,1};
    public static int[] dh = {-1,1,0,0,0,0};
    public static Queue<tomato> q;
    public static void main(String[] args) {
        // write your code here
        Scanner sc = new Scanner(System.in);

        m = sc.nextInt();
        n = sc.nextInt();
        h = sc.nextInt();
        map = new int[h][n][m];
        q = new LinkedList<tomato>();

        for(int k=0; k<h; k++){
            for(int i=0; i<n; i++){
                for(int j=0; j<m; j++){
                    map[k][i][j] = sc.nextInt();
                    if(map[k][i][j] == 1){
                        q.add(new tomato(k,i,j));
                    }
                }
            }
        }
        System.out.println(bfs());
    }

    public static int bfs(){
        while(!q.isEmpty()){
            tomato t = q.poll();
            int nh = t.h;
            int nx = t.x;
            int ny = t.y;

            for(int i=0;i<6;i++){
                int neh = nh + dh[i];
                int nex = nx + dx[i];
                int ney = ny + dy[i];

                if(nex>=0 && ney>=0 && nex<n && ney<m && neh>=0 && neh<h ){
                    if(map[neh][nex][ney] == 0){
                        q.add(new tomato(neh, nex, ney));
                        map[neh][nex][ney] = map[nh][nx][ny]+1;
                    }
                }
            }
        }

        int result = Integer.MIN_VALUE;
        for(int k=0; k<h; k++){
            for(int i=0; i<n; i++) {
                for (int j = 0; j < m; j++) {
                    if(map[k][i][j] == 0){
                        return -1;
                    }
                    result = Math.max(result, map[k][i][j]);
                }
            }
        }

        if(result == 1){
            return 0;
        }
        else return result-1;
    }
}

