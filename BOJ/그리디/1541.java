import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.lang.reflect.Array;
import java.util.*;

public class Main {
    public static void main(String[] args) throws IOException {
        // write your code here
        Scanner sc = new Scanner(System.in);

        String[] s = sc.nextLine().split("-");

        int sum = Integer.MAX_VALUE;
        for(int i=0; i<s.length; i++){
            int temp = 0;

            String[] addition = s[i].split("\\+");

            for(int j=0; j<addition.length; j++){
                temp += Integer.parseInt(addition[j]);
            }

            // 첫번째 토큰
            if(sum == Integer.MAX_VALUE){
                sum = temp;
            }
            else {
                sum -= temp;
            }
        }

        System.out.println(sum);

    }
}

