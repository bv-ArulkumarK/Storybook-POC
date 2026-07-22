module.exports = {
  stories: [
    '../packages/**/*.stories.@(js|jsx|ts|tsx)',
    '../docs/**/*.mdx'
  ],
  addons: [
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/addon-links'
  ],
  framework: {
    name: '@storybook/react-webpack5',
    options: {}
  },
  staticDirs: ['../public'],
  docs: {
    autodocs: 'tag'
  }
};
