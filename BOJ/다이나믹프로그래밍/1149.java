import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.*;

public class Main {
    public static int[][] RGB;
    public static void main(String[] args) throws IOException {
        // write your code here
        Scanner sc = new Scanner(System.in);

        int N = sc.nextInt();
        RGB = new int[N][3];

        for(int i = 0; i < N; i++){
            for(int j = 0; j < 3; j++){
                RGB[i][j] = sc.nextInt();
            }
        }

        for(int i = 1; i< N; i++) {
            RGB[i][0] = Math.min(RGB[i][0] + RGB[i-1][1], RGB[i][0] + RGB[i-1][2]);
            RGB[i][1] = Math.min(RGB[i][1] + RGB[i-1][0], RGB[i][1] + RGB[i-1][2]);
            RGB[i][2] = Math.min(RGB[i][2] + RGB[i-1][0], RGB[i][2] + RGB[i-1][1]);
        }

        Arrays.sort(RGB[N-1]);
        System.out.println(RGB[N-1][0]);
    }
}

