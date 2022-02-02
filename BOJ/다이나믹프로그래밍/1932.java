import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.*;

public class Main {
    public static int[][] board;
    public static void main(String[] args) throws IOException {
        // write your code here
        Scanner sc = new Scanner(System.in);

        int N = sc.nextInt();
        board = new int[N][N];

        for(int i=0; i<N; i++){
            for(int j=0; j<=i; j++){
                board[i][j] = sc.nextInt();
            }
        }

        for(int i=1; i<N; i++){
            for(int j=0; j<=i; j++){
                if(j==0) {
                    board[i][j] += board[i-1][j];
                }
                else{
                    board[i][j] = Math.max(board[i][j] + board[i-1][j], board[i][j] + board[i-1][j-1]);
                }
            }
        }

        Arrays.sort(board[N-1]);
        System.out.println(board[N-1][N-1]);
    }
}

