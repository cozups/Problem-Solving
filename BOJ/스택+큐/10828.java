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
        StringBuilder sb = new StringBuilder();

        int T = Integer.parseInt(br.readLine());

        while(T>0){
            String temp = br.readLine();
            String[] parse = temp.split(" ");

            if(parse.length == 2){
                // push
                s.push(Integer.parseInt(parse[1]));
            }
            else{
                // top, size, empty, pop
                switch (parse[0]){
                    case "pop":
                        if(s.empty()){
                            sb.append("-1").append("\n");
                        }
                        else {
                            sb.append(s.peek()).append("\n");
                            s.pop();
                        }
                        break;
                    case "size":
                        sb.append(s.size()).append("\n");
                        break;
                    case "empty":
                        if(s.empty()){
                            sb.append("1").append("\n");
                        }
                        else {
                            sb.append("0").append("\n");
                        }
                        break;
                    case "top":
                        if(s.empty()){
                            sb.append("-1").append("\n");
                        }
                        else {
                            sb.append(s.peek()).append("\n");
                        }
                        break;
                    default:
                        break;
                }
            }
            T--;
        }
        System.out.println(sb);
    }
}

