const list = [
  {
    id: 18,
    parentId: 16
  },
  {
    id: 19,
    parentId: 0
  },
  {
    id: 16,
    parentId: 0
  },
  {
    id: 20,
    parentId: 19
  },
  {
    id: 17,
    parentId: 16
  },

  {
    id: 22,
    parentId: 17
  },
  {
    id: 21,
    parentId: 18
  },
  {
    id: 23,
    parentId: 22
  },
  {
    id: 24,
    parentId: 23
  }
];

let data = [
  {
    id: 1,
    label: '项目经理',
    parentId: 0
  },

  {
    id: 2,
    label: '产品leader',
    parentId: 1
  },

  {
    id: 3,
    label: 'UIleader',
    parentId: 1
  },

  {
    id: 4,
    label: '技术leader',
    parentId: 1
  },

  {
    id: 5,
    label: '测试leader',
    parentId: 1
  },

  {
    id: 6,
    label: '运维leader',
    parentId: 1
  },

  {
    id: 7,
    label: '产品经理',
    parentId: 2
  }
];

/**
 * 将数组转换为树形结构
 * @param {Array} arr - 需要转换的数组
 * @param {Number} pid - 父节点ID，初始调用时通常为0
 * @returns {Array} - 转换后的树形结构数组
 */
function arrayToTree(arr, pid) {
  let res = [];
  arr.forEach((item) => {
    // 等于0即为根节点
    if (item.parentId === pid) {
      // 一层层遍历 直到不是 根节点为止
      item.children = arrayToTree(arr, item.id);
      res.push(item);
    }
  });
  return res;
}
console.log('arrayToTree1', JSON.stringify(arrayToTree(list, 0)));
console.log('arrayToTree2', JSON.stringify(arrayToTree(data, 0)));
