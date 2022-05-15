#include <iostream>
#include <stack> 

using namespace std;

int main() {
	ios::sync_with_stdio(0);
	cin.tie(0);

	string str;
	stack<char> s;
	int ans = 0;

	cin >> str;

	for (int i = 0; i < str.length(); i++) {
		if (str[i] == '(') {
			s.push(str[i]);
		}
		else {
			char before = str[i-1];
			s.pop();

			if (before == '(') {
				ans += s.size();
			}
			else {
				ans += 1;
			}
		}
	}

	cout << ans;

	return 0;
}