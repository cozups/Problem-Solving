#include <iostream>
#include <stack>

using namespace std;

int main() {
	ios::sync_with_stdio(0);
	cin.tie(0);

	int N;
	stack<double> s;
	string str;

	cin >> N;
	double* nums = new double[N];
	cin >> str;

	for (int i = 0; i < N; i++) cin >> nums[i];

	for (char c: str) {
		if (c != '+' && c != '-' && c != '*' && c != '/') {
			s.push(nums[c-'A']);
		}
		else {
			double res = 0;
			double n2 = s.top();
			s.pop();
			double n1 = s.top();
			s.pop();

			switch (c)
			{
				case '+':
					res = n1 + n2;
					break;
				case '-':
					res = n1 - n2;
					break;
				case '*':
					res = n1 * n2;
					break;
				case '/':
					res = n1 / n2;
					break;
				default:
					break;
			}
			s.push(res);
		}
	}

	cout << fixed;
	cout.precision(2);
	cout << s.top();

	return 0;
}