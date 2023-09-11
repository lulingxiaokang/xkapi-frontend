import { GithubOutlined } from '@ant-design/icons';
import { DefaultFooter } from '@ant-design/pro-components';
const Footer: React.FC = () => {
  const defaultMessage = '庐陵小康出品';
  const currentYear = new Date().getFullYear();
  return (
    <DefaultFooter
      copyright={`${currentYear} ${defaultMessage} `}
      links={[
        {
          key: 'cqu',
          title: '重庆大学',
          href: 'https://www.cqu.edu.cn/',
          blankTarget: true,
        },
        {
          key: 'github',
          title: <GithubOutlined />,
          href: 'https://github.com/lulingxiaokang',
          blankTarget: true,
        },
        {
          key: 'webNum',
          title: '渝ICP备2023009431号-1',
          href: 'https://beian.miit.gov.cn/',
          blankTarget: true,
        },
        // {
        //   key: '',
        //   title: '庐陵小康',
        //   href: 'https://beian.miit.gov.cn/',
        //   blankTarget: true,
        // },
      ]}
    />
  );
};
export default Footer;
