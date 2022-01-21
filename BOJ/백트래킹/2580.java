import java.util.Scanner;

public class Main {
    public static int[][] arr= new int[9][9];
    public static void main(String[] args) {
	// write your code here
        Scanner in = new Scanner(System.in);

        for(int i=0;i<9;i++){
            for(int j=0;j<9;j++){
                arr[i][j] = in.nextInt();
            }
        }

        sudoku(0,0);
    }

    public static void sudoku(int row, int col){
        // 행을 다 채웠을 때
        if(col == 9){
            sudoku(row+1, 0);
            return;
        }

        // 스도쿠 끝! -> 출력
        if(row == 9){
            for(int i=0; i<9; i++){
                for(int j=0; j<9; j++){
                    System.out.print(arr[i][j] + " ");
                }
                System.out.println();
            }
            // 출력 끝! 종료
            System.exit(0);
        }

        if(arr[row][col] == 0){
            for(int i=1; i<=9; i++){
                if(check(row, col, i)){
                    // 넣을 수 있으면
                    arr[row][col] = i;
                    sudoku(row, col+1);
                }
            }
            // 넣었던 숫자를 다시 빼야할 때
            arr[row][col] = 0;
            return;
        }

        sudoku(row, col+1);
    }

    public static boolean check(int row, int col, int value){
        // 같은 행 탐색
        for(int i=0; i<9; i++){
            if(arr[row][i] == value){
                return false;
            }
        }

        // 같은 열 검색
        for(int i=0; i<9; i++){
            if(arr[i][col] == value){
                return false;
            }
        }

        // 3*3 사각형 탐색
        int bound_row = (row / 3) * 3;
        int bound_col = (col / 3) * 3;

        for(int i=bound_row; i<bound_row+3; i++){
            for(int j=bound_col; j<bound_col+3; j++){
                if(arr[i][j] == value){
                    return false;
                }
            }
        }

        return true;
    }
}
