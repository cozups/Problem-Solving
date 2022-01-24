import java.util.*;

public class Main {
    public static int N;
    public static int Num = 0;
    public static void main(String[] args) {
	// write your code here
        Scanner sc = new Scanner(System.in);

        N = sc.nextInt();
        go(Num, 0);
    }

    public static void go(int num, int depth){
        int temp;
        if(depth == N){
            System.out.println(num);
            return;
        }

        for(int i=0; i<10; i++){
            temp = Num*10 + i;
            if(check(temp)){
                Num = temp;
                go(Num, depth+1);
                Num /= 10;
            }
        }
    }

    public static boolean check(int num){
        if(num <= 1) return false;
        for(int i=2; i<=Math.sqrt(num); i++){
            if(num % i == 0) return false;
        }

        return true;
    }
}
