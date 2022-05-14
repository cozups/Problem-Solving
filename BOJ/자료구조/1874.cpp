#include <iostream>
#include <stack>

using namespace std;

int main() {
	ios::sync_with_stdio(0);
	cin.tie(0);
	
	int T, N;
	int num = 1;
	stack<int> s;
	string str;

	cin >> T;

	while (T--) {
		cin >> N;
		while (s.empty() || s.top() < N) {
			s.push(num++);
			str += "+\n";
		}
		if (s.top() == N) {
			s.pop();
			str += "-\n";
		}
		else break;
	}

	if (T == -1) {
		cout << str;
	}
	else {
		cout << "NO";
	}

	return 0;
}