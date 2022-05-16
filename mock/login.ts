// eslint-disable-next-line import/no-extraneous-dependencies
import { Request, Response } from 'express';

function getLogout(req: Request, res: Response) {
  return res.json({
    status: 200,
    msg: '成功',
  });
}

export default {
  'POST  /api/login': (req: Request, res: Response) => {
    const { email, password } = req.body;
    if (password === '123456' && email === 'admin@tiancai.pro') {
      setTimeout(() => {
        res.send({
          status: 200,
          token:
            'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2Mjk1NTIzOTYsInBfdHlwZSI6InBvc3QtZGVtby1iZS1hdXRoIiwiaWQiOiIyMGRhMzYwMi01MGI5LTQxYzMtYjYzZS1kYmY4MzVkNmQ1NzQiLCJlbWFpbCI6ImFkbWluQHRpYW5jYWkucHJvIiwicm5kbnVtIjo4NTcyNCwiaWF0IjoxNjI5NTMwNzk2fQ.VVGWNTQL3aJEHIekQ8Z5iLiXJl5P3B-k14eHBBq_fLbZyf0pH753kiknyIRJcHIk2bF6CFzlaR74twrW5BN9rtYMZK0v4PW6WUhRVuC_3dfeIVAf7IAJIopUPunbO4IzgGZmc0-ZVGqkGLq1ry4xqAIeaOtJSKpVtomNfH07X8vyoFNpdN18Afrd3LNaaH9uT9FevQJcif3lXXSIIlB6ENeB21H5eUrwFW0T7KJpqAeAS7keiY3hl4GEFMlXzg03Acr8rE-rY_85r60r3M_dChQ_01rKy4eTpURAn-3c76HqC6vGKDyKlfBcCULjKK2ny5f71LJV7hrVYQe2S5T7fw',
        });
      }, 1000);
      return;
    }
    // if (email === '123456' && username === 'user') {
    //   res.send({
    //     status: 200,
    //     currentAuthority: {
    //       username: 'user',
    //       userid: 'abc456efdd',
    //     },
    //   });
    //   return;
    // }
    res.send({
      status: 'error',
      currentAuthority: 'guest',
    });
  },
  'POST /api/v2/auth/register': (req: Request, res: Response) => {
    const { email, name, password } = req.body;
    if (email && name && password) {
      setTimeout(() => {
        res.send({
          status: 200,
          token:
            'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2Mjk1NTIzOTYsInBfdHlwZSI6InBvc3QtZGVtby1iZS1hdXRoIiwiaWQiOiIyMGRhMzYwMi01MGI5LTQxYzMtYjYzZS1kYmY4MzVkNmQ1NzQiLCJlbWFpbCI6ImFkbWluQHRpYW5jYWkucHJvIiwicm5kbnVtIjo4NTcyNCwiaWF0IjoxNjI5NTMwNzk2fQ.VVGWNTQL3aJEHIekQ8Z5iLiXJl5P3B-k14eHBBq_fLbZyf0pH753kiknyIRJcHIk2bF6CFzlaR74twrW5BN9rtYMZK0v4PW6WUhRVuC_3dfeIVAf7IAJIopUPunbO4IzgGZmc0-ZVGqkGLq1ry4xqAIeaOtJSKpVtomNfH07X8vyoFNpdN18Afrd3LNaaH9uT9FevQJcif3lXXSIIlB6ENeB21H5eUrwFW0T7KJpqAeAS7keiY3hl4GEFMlXzg03Acr8rE-rY_85r60r3M_dChQ_01rKy4eTpURAn-3c76HqC6vGKDyKlfBcCULjKK2ny5f71LJV7hrVYQe2S5T7fw',
        });
      }, 1000);
      return;
    }
  },
  'GET /api/v2/users/me/posts': (req: Request, res: Response) => {
    setTimeout(() => {
      // const {authsessiontoken} = req.header;
      // const { count, page } = req.body;
      // alert(authsessiontoken)
      // alert(count + '-------' + page)
      res.send({
        status: 200,
        data: [
          {
            id: '00001',
            title: '下午的事情',
            content: '2121',
            creator: '陈奕迅',
            created_at: '2021-08-03',
            updated_at: '2021-08-13',
          },
          {
            id: '00002',
            title: '生日快乐🎂',
            content: '2121',
            creator: '陈奕迅2',
            created_at: '2021-08-03',
            updated_at: '2021-08-13',
          },
          {
            id: '00003',
            title: '怎么肯能跟我分手',
            content: '2121',
            creator: '陈奕迅2',
            created_at: '2021-08-03',
            updated_at: '2021-08-13',
          },
          {
            id: '00004',
            title: '比赛结果',
            content: '2121',
            creator: '陈奕迅3',
            created_at: '2021-08-03',
            updated_at: '2021-08-13',
          },
          {
            id: '00005',
            title: '天气好冷诶',
            content: '2121',
            creator: '陈奕迅4',
            created_at: '2021-08-03',
            updated_at: '2021-08-13',
          },
          {
            id: '00006',
            title: '你好日记',
            content: '2121',
            creator: '陈奕迅5',
            created_at: '2021-08-03',
            updated_at: '2021-08-13',
          },
          {
            id: '00007',
            title: '你好日记',
            content: '2121',
            creator: '陈奕迅6',
            created_at: '2021-08-03',
            updated_at: '2021-08-13',
          },
          {
            id: '00001',
            title: '下午的事情',
            content: '2121',
            creator: '陈奕迅',
            created_at: '2021-08-03',
            updated_at: '2021-08-13',
          },
          {
            id: '00002',
            title: '生日快乐🎂',
            content: '2121',
            creator: '陈奕迅2',
            created_at: '2021-08-03',
            updated_at: '2021-08-13',
          },
          {
            id: '00003',
            title: '怎么肯能跟我分手',
            content: '2121',
            creator: '陈奕迅2',
            created_at: '2021-08-03',
            updated_at: '2021-08-13',
          },
          {
            id: '00004',
            title: '比赛结果',
            content: '2121',
            creator: '陈奕迅3',
            created_at: '2021-08-03',
            updated_at: '2021-08-13',
          },
          {
            id: '00005',
            title: '天气好冷诶',
            content: '2121',
            creator: '陈奕迅4',
            created_at: '2021-08-03',
            updated_at: '2021-08-13',
          },
          {
            id: '00006',
            title: '你好日记',
            content: '2121',
            creator: '陈奕迅5',
            created_at: '2021-08-03',
            updated_at: '2021-08-13',
          },
          {
            id: '00007',
            title: '你好日记',
            content: '2121',
            creator: '陈奕迅6',
            created_at: '2021-08-03',
            updated_at: '2021-08-13',
          },
          {
            id: '00001',
            title: '下午的事情',
            content: '2121',
            creator: '陈奕迅',
            created_at: '2021-08-03',
            updated_at: '2021-08-13',
          },
          {
            id: '00002',
            title: '生日快乐🎂',
            content: '2121',
            creator: '陈奕迅2',
            created_at: '2021-08-03',
            updated_at: '2021-08-13',
          },
          {
            id: '00003',
            title: '怎么肯能跟我分手',
            content: '2121',
            creator: '陈奕迅2',
            created_at: '2021-08-03',
            updated_at: '2021-08-13',
          },
          {
            id: '00004',
            title: '比赛结果',
            content: '2121',
            creator: '陈奕迅3',
            created_at: '2021-08-03',
            updated_at: '2021-08-13',
          },
          {
            id: '00005',
            title: '天气好冷诶',
            content: '2121',
            creator: '陈奕迅4',
            created_at: '2021-08-03',
            updated_at: '2021-08-13',
          },
          {
            id: '00006',
            title: '你好日记',
            content: '2121',
            creator: '陈奕迅5',
            created_at: '2021-08-03',
            updated_at: '2021-08-13',
          },
          {
            id: '00007',
            title: '你好日记',
            content: '2121',
            creator: '陈奕迅6',
            created_at: '2021-08-03',
            updated_at: '2021-08-13',
          },
          {
            id: '00001',
            title: '下午的事情',
            content: '2121',
            creator: '陈奕迅',
            created_at: '2021-08-03',
            updated_at: '2021-08-13',
          },
          {
            id: '00002',
            title: '生日快乐🎂',
            content: '2121',
            creator: '陈奕迅2',
            created_at: '2021-08-03',
            updated_at: '2021-08-13',
          },
          {
            id: '00003',
            title: '怎么肯能跟我分手',
            content: '2121',
            creator: '陈奕迅2',
            created_at: '2021-08-03',
            updated_at: '2021-08-13',
          },
          {
            id: '00004',
            title: '比赛结果',
            content: '2121',
            creator: '陈奕迅3',
            created_at: '2021-08-03',
            updated_at: '2021-08-13',
          },
          {
            id: '00005',
            title: '天气好冷诶',
            content: '2121',
            creator: '陈奕迅4',
            created_at: '2021-08-03',
            updated_at: '2021-08-13',
          },
          {
            id: '00006',
            title: '你好日记',
            content: '2121',
            creator: '陈奕迅5',
            created_at: '2021-08-03',
            updated_at: '2021-08-13',
          },
          {
            id: '00007',
            title: '你好日记',
            content: '2121',
            creator: '陈奕迅6',
            created_at: '2021-08-03',
            updated_at: '2021-08-13',
          },
        ],
      });
      return;
    }, 1000);
  },
  'GET /api/v2/users/me': (req: Request, res: Response) => {
    setTimeout(() => {
      res.send({
        status: 200,
        data: {
          id: '0001',
          name: 'admin',
          email: 'admin@tiancai.pro',
          created_at: '2021-08-21',
          updated_at: '2021-10-21',
        },
      });
    }, 1000);
  },
  'POST /api/v2/posts': (req: Request, res: Response) => {
    setTimeout(() => {
      res.send({
        status: 200,
        data: {
          id: '00001',
          title: '下午的事情',
          content: '2121',
          creator: '陈奕迅',
          created_at: '2021-08-03',
          updated_at: '2021-08-13',
        },
      });
    }, 1000);
  },
  'GET /api/v2/posts/:id': (req: Request, res: Response) => {
    const { id } = req;
    setTimeout(() => {
      res.send({
        status: 200,
        data: {
          id: '00001',
          title: '下午的事情',
          content: '2121',
          creator: '陈奕迅',
          created_at: '2021-08-03',
          updated_at: '2021-08-13',
        },
      });
    }, 1000);
  },
  'GET  /api/logout': getLogout,
};
