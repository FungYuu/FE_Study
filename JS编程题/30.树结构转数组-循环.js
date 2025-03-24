const tree = [
  {
    id: 16,
    parentId: 0,
    children: [
      {
        id: 18,
        parentId: 16,
        children: []
      },
      {
        id: 17,
        parentId: 16,
        children: []
      }
    ]
  },
  {
    id: 19,
    parentId: 0,
    children: [
      {
        id: 20,
        parentId: 19,
        children: [
          {
            id: 21,
            parentId: 20,
            children: [
              {
                id: 22,
                parentId: 21,
                children: [
                  {
                    id: 23,
                    parentId: 22,
                    children: [
                      {
                        id: 24,
                        parentId: 23,
                        children: []
                      }
                    ]
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  }
];
function flattenTree(tree) {
  // 创建空数组 存放扁平化结果
  const result = [];

  // 将根节点或整棵树的节点放入queue中
  const queue = [...tree];

  while (queue.length) {
    // 从队列queue中取出队首元素
    const node = queue.shift();
    result.push({
      id: node.id,
      parentId: node.parentId
    });

    if (node.children) {
      // ...node.children 就是相当于取出数组中的每一项放到queue中
      queue.push(...node.children);
    }
  }

  return result;
}
const flattenedTree = flattenTree(tree);
console.log(flattenedTree);
