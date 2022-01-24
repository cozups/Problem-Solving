import java.util.*;

public class Main {
    public static int k;
    public static boolean[] visited = new boolean[10];
    public static char[] signs;
    public static List<String> result = new ArrayList<>();

    public static void main(String[] args) {
	// write your code here
        Scanner sc = new Scanner(System.in);

        k = sc.nextInt();
        signs = new char[k];
        for(int i=0; i<k; i++){
            signs[i] = sc.next().charAt(0);
        }

        go("", 0);
        // 정렬
        Collections.sort(result);
        System.out.println(result.get(result.size()-1));    // 최대값
        System.out.println(result.get(0));  //최소값
    }

    public static void go(String num, int depth){
        if(depth == k+1){
            result.add(num);
            return;
        }

        for(int i=0; i<10; i++){
            if(depth == 0 || (!visited[i] && check(num.charAt(num.length() - 1) - '0', i, signs[depth-1]))){
                visited[i] = true;
                go(num+i, depth + 1);
                visited[i] = false;
            }
        }
    }

    public static boolean check(int num1, int num2, char sign){
        if(sign == '<'){
            return num1 < num2;
        }
        else return num1 > num2;
    }
}
