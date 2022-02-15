import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.lang.reflect.Array;
import java.util.*;

public class Main {
    public static int getCombination(int n, int k){
        int fac1 = 1, fac2 = 1;
        for(int i=1; i<=k; i++, n--){
            fac1 *= n;
            fac2 *= i;
        }
        return fac1 / fac2;
    }
    public static void main(String[] args) throws IOException {
        // write your code here
        Scanner in = new Scanner(System.in);

        int T = in.nextInt();
        while(T > 0){
            int N = in.nextInt();
            HashMap<String, Integer> clothes = new HashMap<String, Integer>();
            for(int i=0;i<N; i++){
                String name = in.next(); String category = in.next();
                if(clothes.containsKey(category)){
                    int val = clothes.get(category);
                    clothes.replace(category, ++val);
                }
                else{
                    clothes.put(category, 1);
                }
            }

            int ans = 1;
            for(Integer item: clothes.values()){
                    ans *= getCombination(item+1, 1);
            }
            System.out.println(ans-1);
            T--;
        }
    }
}

