#include <iostream>
#include <queue>

using namespace std;

int main() {
	ios::sync_with_stdio(0);
	cin.tie(0);

	int T, N, M, pr;
	queue<pair<int, int>> q;
	priority_queue<int> pq;
	
	cin >> T;
	
	while (T--) {
		cin >> N >> M;
		int cnt = 0;

		for (int i = 0; i < N; i++) {
			cin >> pr;

			q.push({ i, pr });
			pq.push(pr);
		}

		while (!q.empty()) {
			int idx = q.front().first;
			pr = q.front().second;

			q.pop();

			int now = pq.top();
			if (now == pr) {
				pq.pop();
				cnt++;
				if (idx == M) {
					cout << cnt << endl;
				}
			}
			else {
				q.push({ idx, pr });
			}
		}
	}
	

	return 0;
}