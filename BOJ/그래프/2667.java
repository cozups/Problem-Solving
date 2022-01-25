import java.util.*;

public class Main {
    public static int[][] house;
    public static boolean[][] visited;
    public static int N, cnt;
    public static ArrayList<Integer> result;
    public static int[] dx = {-1, 1, 0, 0};
    public static int[] dy = {0, 0, -1, 1};

    public static void main(String[] args) {
	// write your code here
        Scanner sc = new Scanner(System.in);

        N = sc.nextInt();
        house = new int[N][N];
        visited = new boolean[N][N];
        cnt = 0;
        result = new ArrayList<>();

        for(int i=0; i<N; i++){
            String temp = sc.next();
            for(int j=0; j<N; j++){
                house[i][j] = temp.charAt(j) - '0';
            }
        }

        for(int i=0; i<N; i++){
            for(int j=0; j<N; j++){
                if(house[i][j] == 1 && !visited[i][j]){
                    // 새로운 시작
                    cnt = 1;
                    dfs(i, j);
                    result.add(cnt);
                }
            }
        }

        Collections.sort(result);
        System.out.println(result.size());
        for(int c : result){
            System.out.println(c);
        }
    }

    public static void dfs(int x, int y){
        visited[x][y] = true;

        // 4방향 확인
        for(int i=0; i<4; i++){
            int nx = x + dx[i];
            int ny = y + dy[i];

            if(nx>=0 && ny>=0 && nx<N && ny<N){
                if(house[nx][ny] == 1 && !visited[nx][ny]){
                    dfs(nx, ny);
                    cnt++;
                }
            }
        }
    }
}
