import { defineConfig } from 'dumi';
// more config: https://d.umijs.org/config
export default defineConfig({
    title: 'ui',
    favicon:
        'https://user-images.githubusercontent.com/9554297/83762004-a0761b00-a6a9-11ea-83b4-9c8ff721d4b8.png',
    logo:
        'https://user-images.githubusercontent.com/9554297/83762004-a0761b00-a6a9-11ea-83b4-9c8ff721d4b8.png',
    outputPath: 'docs-dist',
    mode: 'site',
    locales: [['zh-CN', '中文']],
    extraBabelPlugins: [
        [
            'import',
            {
                libraryName: 'antd',
                libraryDirectory: 'es',
                style: true,
            },
            'antd',
        ],
    ],
});
