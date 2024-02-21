const ERROR = 2
const WARNING = 1

module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'body-max-line-length': [ERROR, 'always', 120],
    'footer-max-line-length': [ERROR, 'always', 120],
    'header-max-length': [ERROR, 'always', 120],
    'subject-case': [ERROR, 'never', ['start-case', 'pascal-case', 'upper-case']],
    'subject-full-stop': [WARNING, 'never', '.'],
    'type-enum': [
      ERROR,
      'always',
      ['fix', 'bug', 'hotfix', 'revert', 'build', 'improve', 'refactor', 'perf', 'BREAKING CHANGE', 'build', 'feat', 'chore', 'deploy', 'test', 'doc', 'ignore', 'ci', 'bot']
    ]
  }
}
