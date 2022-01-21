// 파이썬은 시간초과가 나길래 자바로 풀어봤습니다.
import java.util.Scanner;

public class Main {

    public static int ans = 0;
    public static int N = 0;
    public static int[] board;
    public static void main(String[] args) {
	// write your code here
        Scanner scanner = new Scanner(System.in);

        N = scanner.nextInt();
        board = new int[N];
        go(0);
        System.out.println(ans);
    }

    public static void go(int n) {
        if(n == N){
            ans++;
            return;
        }
        // 각 배열의 요소를 각 행마다의 열로 생각하면 된다. -> 인덱스 번호 = 행, 배열 값 = 열
        for(int i = 0; i<N; i++){
            board[n] = i;
            if(check(n)){
                go(n+1);
            }
        }
    }

    public static boolean check(int n){
        for(int i = 0; i<n; i++){
            if((board[i] == board[n]) || (n-i == Math.abs(board[n]-board[i]))){
                return false;
            }
        }

        return true;
    }
}
