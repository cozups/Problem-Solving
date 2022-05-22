#include <iostream>
#include <stack>
#include <string>

using namespace std;

int main() {
	ios::sync_with_stdio(0);
	cin.tie(0);

	stack<char> s;
	string str;

	cin >> str;

	for (char c : str) {
		if (c >= 'A' && c <= 'Z') {
			cout << c;
		}
		else {
			switch (c) {
			case '(':
				s.push(c);
				break;
			case '*':
			case '/':
				while (!s.empty() && (s.top() == '*' || s.top() == '/')) {
					cout << s.top();
					s.pop();
				}
				s.push(c);
				break;
			case '+':
			case '-':
				while (!s.empty() && s.top() != '(') {
					cout << s.top();
					s.pop();
				}
				s.push(c);
				break;
			case ')':
				while (!s.empty() && s.top() != '(') {
					cout << s.top();
					s.pop();
				}
				s.pop();
			default: break;
			}
		}
	}

	while (!s.empty()) {
		cout << s.top();
		s.pop();
	}
	cout << '\n';

	return 0;
}