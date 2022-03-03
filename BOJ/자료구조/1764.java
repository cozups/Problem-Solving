import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.lang.reflect.Array;
import java.util.*;

public class Main {
    static HashSet<String> notSee = new HashSet<>();
    static ArrayList<String> answer = new ArrayList<>();
    public static void main(String[] args) throws IOException {
        // write your code here
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringTokenizer st = new StringTokenizer(br.readLine());

        int N = Integer.parseInt(st.nextToken());
        int M = Integer.parseInt(st.nextToken());

        for(int i=0; i<N; i++){
            notSee.add(br.readLine());
        }
        for(int i=0; i<M; i++){
            String name = br.readLine();
            if(notSee.contains(name)){
                answer.add(name);
            }
        }


        Collections.sort(answer);
        System.out.println(answer.size());
        for(String name: answer){
            System.out.println(name);
        }
    }
}

