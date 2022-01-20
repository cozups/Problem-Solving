import java.util.Scanner;

public class Main {

    public static void main(String[] args) {
	// write your code here
        Scanner scanner = new Scanner(System.in);

        int n = scanner.nextInt();
        int m = scanner.nextInt();
        int ans = 0;

        int[] card = new int[n];
        for(int i=0;i<n;i++){
            card[i] = scanner.nextInt();
        }

        for(int i=0;i<n;i++){
            for(int j=i+1;j<n;j++){
                for(int k=j+1;k<n;k++){
                    if(card[i]+card[j]+card[k] <= m){
                        ans = Math.max(ans, card[i]+card[j]+card[k]);
                    }
                }
            }
        }

        System.out.println(ans);
    }
}