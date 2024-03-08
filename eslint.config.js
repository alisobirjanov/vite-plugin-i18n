import antfu from '@antfu/eslint-config'

export default antfu({
  ignores: ['README.md'],
  rules: {
    'no-console': 'warn',
    'ts/ban-ts-comment': 'warn',
  },
})
