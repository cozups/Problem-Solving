import java.util.HashMap;
class Solution {
    public int[] solution(String[] id_list, String[] report, int k) {
        int[] answer = new int[id_list.length];
        HashMap<String, Integer> map = new HashMap<String, Integer>();
        int[][] table = new int[id_list.length+1][id_list.length];
        
        // 해쉬맵을 이용하여 각 이용자의 인덱스를 지정한다.
        for(int i=0; i<id_list.length; i++){
            map.put(id_list[i], i);
        }
        
        for(int i=0; i<report.length; i++){
            // 신고 결과를 공백으로 구분하기 위하여 split 메소드 사용
            String[] temp = report[i].split(" ");
            // 해쉬맵으로부터 신고자와 피신고자의 인덱스 찾기
            int idx = map.get(temp[0]);
            int reported = map.get(temp[1]);
            // 신고를 안했다면 신고 표시(1)을 하고 table 맨 끝(총 신고당한 횟수)에 추가한다.
            if(table[idx][reported] == 0){
                table[idx][reported] = 1;
                table[table.length-1][reported]++;
            }
        }
        
        for(int i=0; i<id_list.length; i++){
            for(int j=0; j<id_list.length; j++){
                // 만약 신고 처리될 사람을 신고했다면 정답에 횟수를 추가한다.
                if(table[table.length-1][j] >= k && table[i][j] == 1){
                    answer[i]++;
                }
            }
        }
        
        return answer;
    }
}