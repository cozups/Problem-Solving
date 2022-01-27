import java.util.*;

public class Main {
    public static int I = 0, endX, endY;
    public static int[][] map;
    public static int[] dx = {-2,-2,2,2,-1,1,-1,1};
    public static int[] dy = {-1,1,-1,1,-2,-2,2,2};
    public static Queue<int[]> q = new LinkedList<>();

    public static void main(String[] args) {
        // write your code here
        Scanner sc = new Scanner(System.in);

        int T = sc.nextInt();

        while(T > 0){
            I = sc.nextInt();
            map = new int[I][I];
            int x = sc.nextInt(); int y = sc.nextInt();
            map[x][y] = 1;
            q.add(new int[] {x, y});
            endX = sc.nextInt(); endY = sc.nextInt();
            System.out.println(bfs());
            T--;
        }
    }

    public static int bfs(){
        while(!q.isEmpty()){
            int[] now = q.poll();
            int nx = now[0];
            int ny = now[1];

            for(int i=0; i<8; i++){
                int nex = nx + dx[i];
                int ney = ny + dy[i];

                if(nex>=0 && nex<I && ney>=0 && ney<I){
                    if(map[nex][ney] == 0){
                        q.add(new int[] {nex, ney});
                        map[nex][ney] = map[nx][ny]+1;
                    }
                }
            }
        }

        return map[endX][endY] - 1;
    }
}

