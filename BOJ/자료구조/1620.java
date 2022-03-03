import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.lang.reflect.Array;
import java.util.*;

public class Main {
    static HashMap<String, String> pokemon = new HashMap<>();
    public static void main(String[] args) throws IOException {
        // write your code here
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringTokenizer st = new StringTokenizer(br.readLine());
        StringBuilder sb = new StringBuilder();

        int N = Integer.parseInt(st.nextToken());
        int M = Integer.parseInt(st.nextToken());

        for(int i=1; i<=N; i++){
            st = new StringTokenizer(br.readLine());
            String pkName = st.nextToken();
            pokemon.put(Integer.toString(i), pkName);
            pokemon.put(pkName, Integer.toString(i));
        }

        for(int i=0; i<M; i++){
            String temp = br.readLine();
            sb.append(pokemon.get(temp)).append("\n");
        }
        System.out.println(sb);
    }
}

