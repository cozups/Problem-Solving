import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.lang.reflect.Array;
import java.util.*;

public class Main {
    static LinkedList<Integer> list = new LinkedList<>();
    static int num, idx = 0;
    public static void main(String[] args) throws IOException {
        // write your code here
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringTokenizer st;
        StringBuilder sb = new StringBuilder();

        int N = Integer.parseInt(br.readLine());
        while(N-- > 0){
            st = new StringTokenizer(br.readLine());
            String cmd = st.nextToken();
            switch (cmd){
                case "add":
                    num = Integer.parseInt(st.nextToken());
                    list.add(num);
                    break;
                case "remove":
                    num = Integer.parseInt(st.nextToken());
                    idx = list.indexOf(num);
                    if(idx != -1){
                        list.remove(idx);
                    }
                    break;
                case "check":
                    num = Integer.parseInt(st.nextToken());
                    if(list.contains(num)){
                        sb.append(1).append("\n");
                    }
                    else {
                        sb.append(0).append("\n");
                    }
                    break;
                case "toggle":
                    num = Integer.parseInt(st.nextToken());
                    if(list.contains(num)){
                        list.remove(list.indexOf(num));
                    }
                    else {
                        list.add(num);
                    }
                    break;
                case "empty":
                    list.clear();
                    break;
                case "all":
                    list.clear();
                    for(int i=1; i<=20; i++){
                        list.add(i);
                    }
                    break;
                default:
                    break;
            }
        }
        System.out.println(sb);
    }
}

