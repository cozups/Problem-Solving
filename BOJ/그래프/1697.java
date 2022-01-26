import java.util.*;

public class Main {
    public static int N, X;
    public static Queue<Integer> q = new LinkedList<>();
    public static int[] arr= new int[200001];
    public static void main(String[] args) {
        // write your code here
        Scanner sc = new Scanner(System.in);

        N = sc.nextInt();
        X = sc.nextInt();

        q.add(N);
        arr[N] = 1;
        System.out.println(bfs() - 1);
    }

    public static int bfs(){
        while(!q.isEmpty()){
            int a = q.poll();
            int d = arr[a];

            if(a == X) return d;
            if(a-1 >= 0 && arr[a-1] == 0){
                q.add(a-1);
                arr[a-1] = d+1;
            }

            if(a+1 < 200001 && arr[a+1] == 0) {
                q.add(a+1);
                arr[a+1] = d+1;
            }

            if(a*2 < 200001 && arr[a*2] == 0) {
                q.add(a * 2);
                arr[a * 2] = d + 1;
            }
        }

        return 0;
    }
}

