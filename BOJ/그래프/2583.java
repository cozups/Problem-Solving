import java.util.*;

public class Main {
    public static int N, M, K, cnt, area;
    public static int[][] map;
    public static boolean[][] visited;
    public static int[] dx = {0, 0, 1, -1};
    public static int[] dy = {1, -1, 0, 0};
    public static ArrayList<Integer> result = new ArrayList<>();
    public static void main(String[] args) {
        // write your code here
        Scanner sc = new Scanner(System.in);

        N = sc.nextInt(); M = sc.nextInt(); K = sc.nextInt();
        map = new int[N][M];
        visited = new boolean[N][M];

        for(int i=0; i<N; i++){
            for(int j=0; j<M; j++){
                map[i][j] = 1;
            }
        }
        for(int t=0; t<K; t++){
            int sX = sc.nextInt(); int sY = sc.nextInt();
            int eX = sc.nextInt(); int eY = sc.nextInt();
            mapping(sX, sY, eX, eY);
        }

        for(int i=0; i<N; i++){
            for(int j=0; j<M; j++){
                if(map[i][j] == 1 && visited[i][j] == false){
                    area = 0;
                    int temp = dfs(i, j);
                    result.add(temp);
                    cnt++;
                }
            }
        }

        Collections.sort(result);
        System.out.println(cnt);
        for(int i=0; i<cnt; i++){
            System.out.print(result.get(i) + " ");
        }
    }

    public static void mapping(int sX, int sY, int eX, int eY){
        for(int i=0; i< eY-sY; i++){
            for(int j=0; j< eX-sX; j++){
                map[N-eY+i][sX+j] = 0;
            }
        }
    }

    public static int dfs(int x, int y){
        visited[x][y] = true;
        area++;

        for(int i=0; i<4; i++){
            int nx = x + dx[i];
            int ny = y + dy[i];

            if(nx>=0 && nx<N && ny>=0 && ny<M){
                if(map[nx][ny] == 1 && visited[nx][ny] == false){
                    dfs(nx, ny);
                }
            }

        }
        return area;
    }
}

