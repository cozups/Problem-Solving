import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.lang.reflect.Array;
import java.util.*;

public class Main {
    public static void main(String[] args) throws IOException {
        // write your code here
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

        int T = Integer.parseInt(br.readLine());

        while(T>0){
            char[] set = br.readLine().toCharArray();
            boolean flag = true;
            Stack<Character> s = new Stack<>();
            for(int i=0; i<set.length; i++){
                if(set[i] == '('){
                    s.push(set[i]);
                }
                else {
                    if(!s.empty()) {
                        s.pop();
                    }
                    else {
                        flag = false;
                        break;
                    }
                }
            }
            if(!s.empty() || !flag){
                System.out.println("NO");
            }
            else {
                System.out.println("YES");
            }
            T--;
        }
    }
}

