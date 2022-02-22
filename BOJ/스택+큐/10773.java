import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.lang.reflect.Array;
import java.util.*;

public class Main {
    public static Stack<Integer> s = new Stack<>();
    public static void main(String[] args) throws IOException {
        // write your code here
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

        int T = Integer.parseInt(br.readLine());

        while(T>0){
            int temp = Integer.parseInt(br.readLine());

            if(temp == 0){
                s.pop();
            }
            else {
                s.push(temp);
            }
            T--;
        }
        int ans = 0;
        for(int i = s.size(); i>0; i--){
            ans += s.peek();
            s.pop();
        }
        System.out.println(ans);
    }
}

