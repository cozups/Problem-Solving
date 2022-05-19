#include <iostream>
#include <deque>

using namespace std;

int main() {
	deque<pair<int, int>> q;
	int N;

	cin >> N;

	for (int i = 1; i <= N; i++) {
		int temp;
		cin >> temp;
		q.push_back({ i, temp });
	}

	while (!q.empty()) {
		int next = q.front().second;
		cout << q.front().first << ' ';
		q.pop_front();

		if (q.empty()) break;

		if (next > 0) {
			for (int i = 0; i < next-1; i++) {
				q.push_back(q.front());
				q.pop_front();
			}
		}
		else {
			next *= -1;
			for (int i = 0; i < next; i++) {
				q.push_front(q.back());
				q.pop_back();
			}
		}
	}

	return 0;
}