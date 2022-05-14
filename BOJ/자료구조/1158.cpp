#include <iostream>
#include <queue>

using namespace std;

int main() {
	ios::sync_with_stdio(0);
	cin.tie(0);

	int N, K;
	queue<int> q;

	cin >> N >> K;
	
	for (int i = 0; i < N; i++) {
		q.push(i + 1);
	}

	cout << '<';
	while (q.size() > 1) {
		for (int i = 0; i < K-1; i++) {
			q.push(q.front());
			q.pop();
		}

		cout << q.front() << ", ";
		q.pop();
	}
	cout << q.front() << '>';


	return 0;
}